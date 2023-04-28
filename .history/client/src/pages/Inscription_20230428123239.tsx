import React from 'react';
import "./Style2.css";



function Inscription() {
    return(

      <div className="row g-3 gap-5" id='form'>
      <div className="col">
        <label >Prenom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >Nom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >ID canne<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >Mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >Confirmation mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div className="col">
      <label >Prenom</label>
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
        <label >Nom</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >Adresse</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >Téléphone</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label >Photo</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <button type="submit" id='butins'>Inscrire</button>
    </div>
         

  );
  }

export default Inscription;