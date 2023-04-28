import React from 'react';
import "./Style2.css";



function Donneconcerne() {
    return(

      
      <div className="row g-3 gap-5" id='borde'>
      <div className="col" id='form'>
        <h6>Modifié les données du concerné</h6><br />
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
        <button type="submit" id='butsuj'>Inscrire</button>
        </div>
        <div className="col d-flex" id='form'>
            <div>
                <span><b>Prenom : go;orf</b></span>
          </div>
            
        </div>
       
      </div>
         

  );
  }

export default Donneconcerne;