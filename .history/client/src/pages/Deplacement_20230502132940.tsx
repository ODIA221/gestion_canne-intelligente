import React, { useState, useEffect, ChangeEvent } from "react";
import "./Style2.css";


function Deplacement(){
    function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return(
        <div className="histo">
                <h4>Historique des </h4>

        <div className="form-group d-flex" >
        <label htmlFor="date"></label>
        <input
          onChange={handleSearch}
          type="date"
          name="date"
          id="date"
          min="2023-01-01"
        />
      </div>
        <table className="table border border-dark mt-4">
          <thead className="the">
            <tr>
              <th>Dates | Heures</th>
              <th>09H</th>
              <th>13H</th>
              <th>18H</th>

            </tr>
          </thead>
          <tbody>
            {/* {dataAffichee.map((item) => ( */}
            <tr>
              <td>13/28/2023</td>
              <td>Dakar, mermoz</td>
              <td>Dakar, mermoz</td>
              <td>Dakar, mermoz</td>

            </tr>
            {/*             ))}
   */}            </tbody>
        </table>
  <div className="d-flex justify-content-center fixed-bottom">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link text-dark" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link text-dark" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    );
}
export default Deplacement;