const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const userSchema = require('../models/User')
const santeSchema = require('../models/Sante')
const authorize = require('../authentification/auth')
const serverData = require('../index')
const User = require('../models/User')
mongoose = require('mongoose')
mongoose.set('strictQuery', true);



/*Liste des Actifs */
router.route('/').get((req, res, next) => {
  userSchema.find({ etat: true }, (error, response) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json(response);
    }
  });
});
/* Liste des Archivés */
router.route('/listeArches').get((req, res, next) => {
  userSchema.find({ etat: false }, (error, response) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json(response);
    }
  });
});

/* arhivage */
router.put('/archiver/:id', (req, res, next) => {
  const userId = req.params.id;
  userSchema.findByIdAndUpdate(userId, { etat: false }, { new: true })
    .then((updatedUser) => {
      res.status(200).json({
        message: "Utilisateur archivé avec succès !",
        user: updatedUser,
      });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});


/* Désarchiver utilisateur */
router.put('/desarchiver/:id', (req, res, next) => {
  const userId = req.params.id;
  userSchema.findByIdAndUpdate(userId, { etat: true }, { new: true })
    .then((updatedUser) => {
      res.status(200).json({
        message: "Désarchivage réussie !",
        user: updatedUser,
      });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});



/* inscription avec id_canne autogébérer */
router.post('/ajouter', async (req, res, next) => {
  try {
    const lastUser = await userSchema.findOne({}, {}, { sort: { 'createdAt' : -1 } }); // obtenir le dernier inscrit
    let canneNumber = 1; // initialiser le numéro de la canne à 1
    if (lastUser) {
      const canneString = lastUser.id_canne.substring(5); // obtenir le dernier inscrit
      if (!isNaN(canneString)) { // vérifier si le numéro est valide
        canneNumber = parseInt(canneString) + 1; // incrémenter le numéro d'incription en fonction des ajouts
      }
    }
    const id_canne = `canne${canneNumber}`; // Auto générer un id_canne
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hasher le mot de passe
    const user = new userSchema({
      prenom: req.body.prenom,
      nom: req.body.nom,
      id_canne,
      password: hashedPassword,
      prenom1: req.body.prenom1,
      nom1: req.body.nom1,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
      etat: true, 
      role: req.body.role
    });
    const savedUser = await user.save(); // enregistrer user dans la base
    return res.status(201).json({
      message: 'Inscription réussie !',
      result: savedUser
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: error.message
      });
    } else if (error.message.includes('duplicate key error')) {
      return res.status(409).json({
        error: 'Compte déjà existant !'
      });
    } else {
      return res.status(500).json({
        error: 'Une erreur est survenue lors de l\'inscription'
      });
    }
  }
});


// Connexion
router.post('/connexion', (req, res) => {
  res.header({
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  })
  let getUser
  userSchema
    .findOne({
      id_canne: req.body.id_canne,
    })
    // Verifier si l'utilisateur existe
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'l\'didentifiant utilisateur n\'existe pas !',
        })
      }
      getUser = user
      return bcrypt.compare(req.body.password, user.password)
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: 'Le mot de passe est incorrect !',
        })
      }else if(getUser.etat == false){
        return res.status(401).json({
          message: 'Le compte est désactivé !' ,
        })
      }
      let jwtToken = jwt.sign(
        {
          id_canne: getUser.id_canne,
          userId: getUser._id,
        },
        'token-pour-se-connecter',
        {
          expiresIn: '1h',
        },
      )
      return res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        _id: getUser._id,
      })
    })
    .catch((err) => {
      return
      res.status(401).json({
        message: 'Authentication échouée',
        
      })
      
    })
})



// Recuperez et autoriser la connexion d'un utilisateur
router.route('/profile/:id').get(authorize, (req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.status(200).json({
        msg: data,
      })
    }
  })
})
 

/* modification profile */
router.patch('/modifierProfile/:id', async(req, res) => {
  try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        let user = userSchema.findById(id);
        if(!user){
          return res.status(404);
        };
      
        user.then(async(e)=> {
            /* Vérifier le mot de passe actuel */
            let { mdpActuel, mdpNouveau, nom, prenom } = req.body;
            const testPassword = await bcrypt.compare(mdpActuel, e.password)

            if(!testPassword){
              return res.send('Mot de passe actuel incorrect');
            }

            /* Mettre à jour le nom et le prénom */
            if(nom !== undefined){
              updatedData.nom = nom;
            }
            if(prenom !== undefined){
              updatedData.prenom = prenom;
            }

            /* Mettre à jour le mot de passe */
            if(mdpNouveau !== undefined){
              const hash = await bcrypt.hash(mdpNouveau, 10);
              updatedData.password = hash;
            }

            /* Mettre à jour l'utilisateur */
            const result = await userSchema.findByIdAndUpdate(id, updatedData, options);
            return res.send(result);
          });
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }

  //historique serre
router.post('/envoi',  (req, res, next) => {
  console.log(req.body)

      const historique = new historiqueSchema({
        jour: req.body.jour,
        humsol: req.body.humsol,

      })
      historique.save()
        .then((response) => {
          console.log(response);
          return res.status(201).json({
            message: 'inssertion réussie !',
            result: response,
          })
        })
        .catch((error) => {
          return res.status(409).json({
          })
          
        })
    })


});

 
  


module.exports = router





/* Inscription  */
/* router.post('/inscription',  (req, res, next) => {
  console.log(req.body)

    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new userSchema({
        prenom: req.body.prenom,
        nom: req.body.nom,
        id_canne: req.body.id_canne,
        password: hash,
        photo: req.body.photo,
        prenom1: req.body.prenom1,
        nom1: req.body.nom1,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        etat: req.body.etat,
        role: req.body.role
      })
      user.save()
        .then((response) => {
          console.log(response);
          return res.status(201).json({
            message: 'Inscription réussie !',
            result: response,
          })
        })
        .catch((error) => {
          return res.status(409).json({
            error: error.message.split("id_canne:")[1],
          })
          
        })
    })
},
) */)}