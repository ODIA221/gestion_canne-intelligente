import React, { useState }from "react";
import { useForm } from "react-hook-form";
import "./Style2.css";
import axios from "axios";

/* endPoint api */
const ENDPOINT = "http://localhost:5000/api/connexion";

export default function Connexion() {

    /* Controle de saisie */
    const [error, setErrror] =useState(null);

    /*  hooks-form*/
    const {
        register,
        formState: { errors },
        handleSubmit,
        } = useForm(
        {mode:"onChange"}
        );
    /* btn ctrl saisie */
    const onSubmit = (data: any) => console.log("");



    /* pour se connecter */
const connexion = (e:any) =>{
   /*  e.prevenDefault(); */
    
    const data: { id_canne: string, password: string } = {
        id_canne: (document.getElementById("id_canne") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value,
      };
        try{
          
            axios
            .post(ENDPOINT, data)
            .then((response)  =>{ 
                /* vérification token */
                if(response?.data?.token){
                    /* stockage du token dans localStorage */
                    localStorage.setItem('token', response?.data?.token)
                    localStorage.setItem('id', response?.data?._id)
                    /* redirection si token est bon */
                    window.location.pathname = '/Dashbord/Admin';
                    
                }
            })
            .then(data =>{
                /* setLogin(data) */
               /*  setIsLoading(true) */
                setErrror (null)
                
            })
            .catch(error =>{
                /* console.log(error) */
                setErrror (error.message)
               /*  setIsLoading(false) */
                // Erreur de la requête
                if (error.response) {
                // Le serveur a renvoyé une réponse avec un code d'erreur
                setErrror(error.response.data.message);
                }
        })
            }catch(err:any){
            console.log(err.message); //failed to match
            return err.json();           
        }
}

  return (
    
    <body id="corp">
        <form id="formBody" onSubmit={handleSubmit(onSubmit)}>
        <div id='titreConnexion'>Connexion</div>

            {/* Affichage des message du server */}
            <div id="errClient">
                {error && <div>{error}</div>}
            </div>
{/*             <div className="mb-3">
 */}                <div className="labelInputConnexion">
                    <label>
                        Ididentifiant Utilisateur
                    </label>
                </div>
                <div>
                    <input 
                    /*  className="form"  */
                        className="formInput" 
                        aria-describedby="emailHelp"
                        placeholder="indentifiant" 
                        id="id_canne"
                        {...register("id_canne", {
                            required: "Champ Obligatoire",
                        })}
                    />
                    {/* Message d'erreurs */}
                    {errors.id_canne && <small className='err'>{errors?.id_canne?.message?.toString()  }</small>}
                </div>
{/*             </div>
 */}{/*             <div className="mb-3">
 */}                <div className="labelInputConnexion">
                    <label>
                        Mot de passe
                    </label>
                </div>
                <div>
                    <input type="password" 
                        /* className="form"  */
                        className="formInput"
                        id="password"
                        placeholder="Mot de passe" 
                        {...register("password", {
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
                    {errors.password && <small className='err'>{errors?.password?.message?.toString()}</small>}
                </div>
{/*             </div>
 */}            <button type="submit" id="btnConnexion" onClick={(e) =>connexion(e)}>Connexion</button>
        </form>
    </body>
  )
}
