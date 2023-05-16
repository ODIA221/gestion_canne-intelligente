import { useState, useEffect } from 'react'
import "./Style2.css";
import { useForm } from "react-hook-form";
import axios from 'axios'


function Modifmdp() {



  /*  hooks pour Modification mot de passe */
  const [mdpActuel, setMdpActuel] = useState("");
  const [mdpNouveau, setMdpNouveau] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  /*--partie  modicfication Mot de passe --------*/
  /* controle de saisie avec hook form */
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm(
    { mode: "onChange" }
  );


/* mettre les valeurs par défaut des champs nom et prenom */
  useEffect(() => {
    setValue("nom", nom);
    setValue("prenom", prenom);
  }, [nom, prenom, setValue]);


  /* recupérer value mdpNouveau pour la comparer aveau confirmation  Mdp  */
  const nouveauMdp = watch ('mdpNouveau');


  const onSubmit = async (data: any) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api//modifierProfile/${localStorage.getItem("id")}`, {
        nom: data.nom,
        prenom: data.prenom,
        mdpActuel: data.mdpActuel,
        mdpNouveau: data.mdpNouveau,
      })
    
      

      /* Attrapper les exceptions venant du server */
      if(!response?.data._id){
        setError(true);
        setTimeout(() => {
          setError(false);
          setError(false);
          setValue("nom", nom);
          setValue("prenom", prenom);
          setValue("mdpActuel", "");
          setValue("mdpNouveau", "");
        }, 3000);
    }else{

      setSuccess(true); 
      setValue("mdpActuel", "");
      setValue("mdpNouveau", "");
      setValue("mdpConfirm", "");
      setTimeout(() => {
        window.location.pathname = '/Dashbord/Admin';
          
        }, 3000);
    }
    } catch (error) {
      // setError(error.response.data.message);
      console.log(error);
    }
  };


  /* Fin modification mot de passse */
  return (


    <form className="row g-3" id='borde'  onSubmit={handleSubmit(onSubmit)}>
      <h5 className='titre'>Modification du profil</h5>
      <div id='errServer'>
        {/* capter les messages d'erreurs server */}
        {error && 
          <p id='errMdp'>
          Ancien mot de passe incorrect !
          </p>
        }
        {/* afficher un message de succès si la modification s'est bien déroulée */}
        {success && (
          <div id='successMdp'>
            Votre profile a été modifié avec succès !
          </div>
        )}
      </div>
      <div className="col" id='form2'>
        <div className='labelInputConnexion'>
        <label>
              Prenom
              <span className='text-danger'>*</span>
            </label>
        </div>
          
          <input 
              className="form-control" 
              type="text"
              placeholder=""
              id='prenom'
              defaultValue={prenom}
              {...register("prenom", {
                required: "Champ Obligatoire",
                
                
            })}
            // /* onChange={(event) => setPrenom(event.target.setValue)} */
          />
          {/* Message d'erreurs */}
          <div>
            {errors.prenom && <small className='err'>{errors?.prenom?.message?.toString() }</small>}
          </div>
          <div className='labelInputConnexion'>
          <label>
              Nom
              <span className='text-danger'>*</span>
          </label>
          </div>
          
          <input 
              className="form-control" 
              type="text"
              id='nom'
              placeholder="........."
              defaultValue={nom}
              {...register("nom", {
                required: "Champ Obligatoire",
                
            })}
          />
          {/* Message d'erreurs */}
          <div>
            {errors.nom && <small className='err'>{errors?.nom?.message?.toString() }</small>}
          </div>
          <div className='labelInputConnexion'>
          <label>
              Ancien mot de passe
              <span className='text-danger'>*</span>
          </label>
          </div>
          
          <input 
              className="form-control" 
              type="password"
              id='mdpActuel'
              placeholder="........."
              defaultValue={mdpActuel}
              /* onChange={(e) => setMdpActuel(e.target.value)} */
              {...register("mdpActuel", {
                required: "Champ Obligatoire",
                
                minLength: {
                  value: 5,
                  message: "5 Caractètes au minimum"
                },
                maxLength: {
                  value:10,
                  message: "10 Caractètes au maximum"
                }
            })}
          />
          {/* Message d'erreurs */}
          <div>
            {errors.mdpActuel && <small className='err'>{errors?.mdpActuel?.message?.toString() }</small>}
          </div>
          <div className='labelInputConnexion'>
          <label>
              Mot de passe
              <span className='text-danger'>*</span>
          </label>
          </div>
          
          <input 
              className="form-control" 
              type="password"
              id='mdpNouveau'
              placeholder="........."
              defaultValue={mdpNouveau}
              /* onChange={(e) => setMdpNouveau(e.target.value)} */
              {...register("mdpNouveau", {
                required: "Champ Obligatoire",
                
                minLength: {
                  value: 5,
                  message: "5 Caractètes au minimum"
                },
                maxLength: {
                  value:10,
                  message: "10 Caractètes au maximum"
                }
                
                
            })}
          />
          {/* Message d'erreurs */}
          {errors.mdpNouveau && <small className='err'>{errors?.mdpNouveau?.message?.toString() }</small>}
          <div className='labelInputConnexion'>
          <label>
              Confirmation mot de passe
              <span className='text-danger'>*</span>
          </label>
          </div>
         
          <input 
              className="form-control"
              placeholder="........."
              type="password"
              id='mdpConfirm'
              {...register("mdpConfirm", {
                required: "Champ Obligatoire",
                
                minLength: {
                  value: 1,
                  message: ""
                },

                validate: (value) => 
                value === nouveauMdp || "Les mots de passe ne conrrespondent pas !",
            })}
          />
          {/* Message d'erreurs */}
          <div>
            {errors.mdpConfirm && <small className='err'>{errors?.mdpConfirm?.message?.toString() }</small>}
          </div>
          <button type="submit" id='butins'>Modifié</button>  

      </div>

    </form>
  );
}

export default Modifmdp;