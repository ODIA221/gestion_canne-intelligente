import React from 'react';
import "./Style2.css";



function Donneconcerne() {
    return(

      
      <div className="row g-3 gap-5" id='borde'>
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
        </div>
        <button type="submit" id='butins'>Inscrire</button>
       
        
    </div>
         

  );
  }

export default Donneconcerne;