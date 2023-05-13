import React from 'react';
import "./Style2.css";



function Donneconcerne() {
    return(

      
      <div className="row g-3 gap-5" id='borde2'>
      <div className="col" id='form'>
        <h6>Modifié les données du concerné</h6>
        <form>
        <div className='labelInputConnexion'>      
          <label>Prenom</label>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <div className='labelInputConnexion'>
        <label>Nom</label>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <div className='labelInputConnexion'>
        <label>Adresse</label>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <div className='labelInputConnexion'>
        <label>Téléphone</label>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
{/*         <label>Photo</label>
        <input type="text" className="form-control" placeholder="" aria-label=""/> */}
        <button type="submit" id='butsuj'>Enregistré</button>
        </form>

        </div>

        <div className="col d-flex" id='form'>
            <h6>Informations du concerné</h6>
            <div className='d-flex-wrap'>
              <span>Prenom :</span>
              <span>Nom :</span>
              <span>Adresse :</span>
              <span>Téléphone :</span>

          </div>
            
        </div>
      </div>
         

  );
  }

export default Donneconcerne;