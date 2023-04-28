import React from 'react';



function Admin() {
    return(

        <div className="container">
        <div className="form-group">
          <label htmlFor="date">Sélectionner une date:</label>
          <input
            onChange={handleSearch}
            type="date"
            name="date"
            id="date"
            min="2023-01-01"
          />
        </div>
        <table className="table border border-dark mt-4">
          <thead>
            <tr>
              <th>Jours</th>
              <th>Température (°C)</th>
              <th>Humidité sol (%)</th>
              <th>Pression serre (%)</th>
              <th>luminosité (lux)</th>
            </tr>
            </thead>
            <tbody>
             {/*  {dataAffichee.map((item) => (
              <tr key={item.id}>
                <td>{new Date(item.dateInsertion).toLocaleDateString()}</td>
                <td>{item.temperature}</td>
                <td>{item.humsol}</td>
                <td>{item.humserre}</td>
                <td>{item.luminosite}</td>
              </tr>
              ))} */}
              </tbody>
              </table>
              {/* <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${active1 ? "active" : ""}`}>
                  <a className="page-link" href="#" onClick={() => handlePagination(1)}>
                    1
                  </a>
                </li>
                <li className={`page-item ${active2 ? "active" : ""}`}>
                  <a className="page-link" href="#" onClick={() => handlePagination(2)}>
                    2
                  </a>
                </li>
              </ul>
            </nav> */}
  
        </div>
        );
        }
  

export default Admin;