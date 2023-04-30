import React, { useState }from "react";
import { useForm } from "react-hook-form";
import "./Style2.css";
import axios from "axios";

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

    const message: string =""

  return (
    
    <body className='Container' id="corp">
        <form id="formBody" onSubmit={handleSubmit(onSubmit)}>
        <div id='titreConnexion'>Connexion</div>
            <div className="mb-3">
                <div  className="labelInputConnexion">
                    <label>
                        Ididentifiant Canne
                    </label>
                </div>
                <div>
                    <input 
                    /*  className="form"  */
                        className="formInput" 
                        aria-describedby="emailHelp"
                        placeholder="Id Canne" 
                        {...register("id_canne", {
                            required: "Champ Obligatoire",
                            pattern:{
                                value: /^[a-zA-Z]+[0-9-]+$/i,
                                message: "Identifiant incorrect",
                            } 
                        })}
                    />
                    {/* Message d'erreurs */}
                    {errors.id_canne && <small className='err'>{errors.id_canne.message  }</small>}
                </div>
            </div>
            <div className="mb-3">
                <div   className="labelInputConnexion"><label>Mot de passe</label></div>
                <input type="password" 
                    /* className="form"  */
                    className="formInput"
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
                {errors.password && <small className='err'>{errors.password.message}</small>}
            </div>
            <button type="submit" id="btnConnexion">Connexion</button>
        </form>
    </body>
  )
}
