import React from 'react';
import "./Style2.css";



function Donneconcerne() {
    return(

      
      <div className="row g-3 gap-5" id='borde2'>
      <div className="col" id='form'>
        <h6>Modifié les données du concerné</h6><br />
        <div>      
          <label>Prenom</label>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <div></div>
        <label>Nom</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Adresse</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Téléphone</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
{/*         <label>Photo</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/> */}
        <button type="submit" id='butsuj'>Modifier</button>
        </div>

        <div className="col d-flex" id='form'>
            <h6>Informations du concerné</h6>
            <div className='d-flex-wrap'>
          </div>
            
        </div>
      </div>
         

  );
  }

export default Donneconcerne;