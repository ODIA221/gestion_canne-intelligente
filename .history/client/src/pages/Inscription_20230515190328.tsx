import { useState, useEffect } from 'react'
import "./Style2.css";
import { useForm } from "react-hook-form";
import axios from 'axios'



function Inscription() {


  /*  hooks d'inscription*/
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [nom1, setNom1] = useState("");
  const [prenom1, setPrenom1] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  
  
  


  /*--partie  inscription --------*/
  /* controle de saisie avec hook form */
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm(
    { mode: "onChange" }
  );

  /* recupérer value mdpNouveau pour la comparer aveau confirmation  Mdp  */
  const nouveauMdp = watch ('password');


  const onSubmit = async (data: any) => {

    /* console.log(); */


    try {
      const response = await axios.post(`http://localhost:5000/api/ajouter`, {
        nom: data.nom,
        prenom: data.prenom,
        password: data.password,
        nom1: data.nom,
        prenom1: data.prenom,
        adresse: data.adresse,
        telephone: data.telephone,

      })

            /* Attrapper les exceptions venant du server */
            if(response?.data._id){
              setError(true);
              setTimeout(() => {
                setError(false);
                (document.getElementById("nom") as HTMLInputElement).value; 
                (document.getElementById("prenom") as HTMLInputElement).value;   
                (document.getElementById("password") as HTMLInputElement).value; 
              }, 3000);
          }else{
      
            setSuccess(true); 
            (document.getElementById("nom") as HTMLInputElement).value=""; 
            (document.getElementById("prenom") as HTMLInputElement).value="";
            (document.getElementById("password") as HTMLInputElement).value="";
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





    return(

      <div className="container row g-3 gap-5" id='borde' >
          <form onSubmit={handleSubmit(onSubmit)}>
          <h5 className='titre'>Ajouter des utilisateurs </h5>
{/*           <h6 className='titre'>Vous pouvez ajouter les informations du concerné</h6>
 */}          <div id='errServer'>
            {/* capter les messages d'erreurs server */}
            {error && 
              <p id='errMdp'>
                Compte déjà existant !
              </p>
            }
            {/* afficher un message de succès si la modification s'est bien déroulée */}
            {success && (
              <div id='successMdp'>
                Inscription réussie !
              </div>
            )}
          </div>
            <div className="col" id='form'>
              <div className='labelInputConnexion'>
              <label>
                  Prenom
                  <span className='text-danger'>*</span>
              </label>
              </div>
             
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
                  id='prenom'
                  defaultValue={prenom}
                  {...register("prenom", {
                    required: "Champ Obligatoire",
                    
                })}
              />
              {/* Message d'erreurs */}
              <div>
                {errors.prenom && <small className='err text-danger'>{errors?.prenom?.message?.toString() }</small>}
              </div>
              <div className='labelInputConnexion'>
              <label>
                  Nom
                  <span className='text-danger'>*</span>
              </label>
              </div>
              
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
                  id='nom'
                  defaultValue={nom}
                  {...register("nom", {
                    required: "Champ Obligatoire",
                    
                })}
              />
              {/* Message d'erreurs */}
              <div>
                {errors.nom && <small className='err text-danger'>{errors?.nom?.message?.toString() }</small>}
              </div>
              <div className='labelInputConnexion'>
              <label>
                  Mot de passe
                  <span className='text-danger'>*</span>
              </label>
              </div>
              
              <input 
                  type="password" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
                  id='password'
                  defaultValue={password}
                  {...register("password", {
                    required: "Champ Obligatoire",
                    
                })}
              />
              {/* Message d'erreurs */}
              <div>
                {errors.password && <small className='err text-danger'>{errors?.password?.message?.toString() }</small>}
              </div>
              <div className='labelInputConnexion'>
              <label>
                  Confirmation mot de passe
                  <span className='text-danger'>*</span>
              </label>
              </div>
             
              <input 
                  type="password" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
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
                {errors.mdpConfirm && <small className='err text-danger'>{errors?.mdpConfirm?.message?.toString() }</small>}
              </div>
              <div className='labelInputConnexion'>
              <label>
              Téléphone                 
 <span className='text-danger'></span>
              </label>
              </div>
             
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
                  id='telephone'
                  {...register("telephone", {
                   pattern:{
                       value: /^(221|00221|\+221)?(77|78|75|70|76)[0-9]{7}+$/i,
                       message: "Format du telephone incorrect",
                   } 
               })} 
              />
              {/* Message d'erreurs */}
              <div>
              {errors.telephone && <small className='err'>{errors?.telephone?.message?.toString() }</small>}
              </div>
            </div>

          {/*   <div className="col" id='form'>
              <label>
                  Prenom 
              </label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  aria-label=""
              />
              <label>
                  Nom
              </label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
              />
              <label>
                  Adresse
              </label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
              />
              <label>
                  Téléphone
                </label>
              <input 
                  type="number" 
                  className="form-control" 
                  placeholder="" 
                  aria-label=""
                  id='telephone'
                   {...register("telephone", {
                    pattern:{
                        value: /^(221|00221|\+221)?(77|78|75|70|76)[0-9]{7}+$/i,
                        message: "Format du telephone incorrect",
                    } 
                })} 
              />
         <div>
                {errors.telephone && <small className='err'>{errors?.telephone?.message?.toString() }</small>}
              </div> 
            </div> */}
            <button type="submit" id='butins'>Ajouter</button>  
         </form>    
        </div>
         

  );
  }

export default Inscription;