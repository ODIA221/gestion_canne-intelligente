import React from 'react';
import "./Style2.css";


function Modifmdp() {
    return(

      
      <div className="row g-3" id='borde'>
                        <h5 className='titre'>Modification du profil</h5>

      <div className="col" id='form2'>
        <label>Prenom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Nom<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Ancien mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
        <label>Confirmation mot de passe<span className='text-danger'>*</span></label>
        <input type="text" className="form-control" placeholder="" aria-label=""/>
      </div>
      <button type="submit" id='butins'>Modifier</button>

      </div>
      );
      }

export default Modifmdp;