import React from 'react';



function Inscription() {
    return(

      <div className="row g-3">
      <div className="col">
        <label htmlFor="">Prenom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">Nom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">ID canne</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">Mot de passe</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">Confirmation mot de passe</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div className="col">
      <label htmlFor="">Prenom</label>
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
        <label htmlFor="">Nom</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">Adresse</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">Téléphone</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <label htmlFor="">Photo</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>

      </div>
      <button>Inscrire</button>
    </div>
  );
  }

export default Inscription;