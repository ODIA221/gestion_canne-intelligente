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

    const message="";

  return (
    
    <div className='Container'>
        <div id='titre'>Connexion</div>
        <form className='connexion' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="label">Id Canne</label>
                <input 
                    className="form" 
                    id="form" 
                    aria-describedby="emailHelp"
                    placeholder="Id-Canne" 
                    {...register("id_canne", {
                        required: "Champ Obligatoire",
                        pattern:{
                            value: /^[a-zA-Z]+[0-9-]+$/i,
                            message: "Id incorrect",
                        } 
                    })}
                />
                {/* Message d'erreurs */}
                {errors.id_canne && <small className='err'>{errors.id_canne.message }</small>}
            </div>
            <div className="mb-3">
                <label  className="label">Mot de passe</label>
                <input type="password" 
                    className="form" 
                    id="form"
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
            <button type="submit" id="btn">Connexion</button>
        </form>
    </div>
  )
}
