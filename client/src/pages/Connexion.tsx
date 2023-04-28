import React from 'react'
import "./Style2.css";

export default function Connexion() {
  return (
    
    <div className='Container'>
        <div id='titre'>Connexion</div>
        <form className='connexion'>
            <div className="mb-3">
                <label className="label">Id Canne</label>
                <input type="email" 
                    className="form" 
                    id="form" 
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label  className="label">Mot de passe</label>
                <input type="password" 
                    className="form" 
                    id="form"
                />
            </div>
            <button type="submit" id="btn">Connexion</button>
        </form>
    </div>
  )
}
