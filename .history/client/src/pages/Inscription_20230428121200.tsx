import React from 'react';



function Inscription() {
    return(

      <div className="row g-3">
      <div className="col">
        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
      </div>
    </div>
  );
  }

export default Inscription;