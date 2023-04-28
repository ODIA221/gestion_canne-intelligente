import React from 'react';
import "./Style2.css";



function Inscription() {
    return(

      
      <div className="row g-3 gap-5" id='borde'>
      <div className="col" id='form'>
        <label>Prenom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Nom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>ID canne<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Confirmation mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
      </div>
      <div className="col" id='form'>
      <label>Prenom</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Nom</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Adresse</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Téléphone</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Photo</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <br />      
        </div>
       
        <button type="submit" id='butins'>Inscrire</button>
        </div>
    </div>
         

  );
  }

export default Inscription;