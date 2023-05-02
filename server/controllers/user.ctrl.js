const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const userSchema = require('../models/User')
const historiqueSchema = require('../models/Climat')
const authorize = require('../authentification/auth')
const serverData = require('../index')
const User = require('../models/User')
mongoose = require('mongoose')
mongoose.set('strictQuery', true);




/* Inscription  */
router.post('/ajouter',  (req, res, next) => {
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
        etat: req.body.etat
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
)

//historique serre
router.post('/envoi',  (req, res, next) => {
console.log(req.body)

    const historique = new historiqueSchema({
      jour: req.body.jour,
      temperature: req.body.temperature,
      humsol: req.body.humsol,
      humserre: req.body.humserre,
      luminosite: req.body.luminosite,

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
          message: 'ID inéxistant !',
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


// Recuperez tous les utilisateurs
router.route('/').get((req, res, next) => {
  userSchema.find((error, response)=> {
    if (error) {
      return next(error)
    } else {
      return res.status(200).json(response)
    }
  })
})

// Recuperez un utilisateur
router.route('/lire/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

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

/* Modification mot de passe */
router.patch('/modifierMdp/:id', async(req, res) => {
  try {
        let { mdpActuel, mdpNouveau } = req.body;
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        let user= userSchema.findById({"_id": req.params.id});
        if(!user){
          return res.status(404);
        };
      
          user.then(async(e)=> {
           /*  console.log(mdpActuel); */
            const testPassword = await bcrypt.compare(mdpActuel, e.password)

                if(testPassword){
                    const hash = await bcrypt.hash(mdpNouveau, 10);
                      updatedData.password;
                      const result = await userSchema.findByIdAndUpdate(
                      id, {password:hash}, options
                      );
                    return res.send(result);
                }
                return res.send(' Mdp actuel incorrect');/* no corres */
          });
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
 
 
  


module.exports = router