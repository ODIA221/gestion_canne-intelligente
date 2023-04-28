import React from 'react';



function Inscription() {
    return(

      <div className="row g-3">
      <div className="col">
        <label htmlFor="">P</label>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <button>Inscrire</button>
    </div>
  );
  }

export default Inscription;