import React, { useState, useEffect, ChangeEvent } from "react";
import "./Style2.css";
V
function Sante(){
    function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return(
        <div className="histo">
                          <h3>Historique de Santé</h3>

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
              <th>Dates | Données</th>
              <th>Rythme cardiaque</th>
              <th>Pression artérielle</th>
            </tr>
          </thead>
          <tbody>
            {/* {dataAffichee.map((item) => ( */}
            <tr>
              <td>13/28/2023</td>
              <td>80-85 b/min</td>
              <td>120/80 mmHg</td>
             
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



/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Style2.css";

function Historiques() {
  const [donnee, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [rechercher, setRecherche] = useState("");
  const [cacher2, setCacher2] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/recu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const donneeAvecDate = res.map((item) => ({
          ...item,
          dateInsertion: Date.now(),
        }));
        setData(donneeAvecDate);
      });
  }, []);

  const handleSearch = (event) => {
    const valeur = event.target.value;
    setRecherche(valeur);
  };

  const handlePagination = (page) => {
    if (page === 1) {
      setStart(0);
      setEnd(7);
      setActive1(true);
      setActive2(false);
    } else if (page === 2) {
      setStart(7);
      setEnd(11);
      setActive1(false);
      setActive2(true);
    }
  };

  const dataFiltree = donnee.filter((item) => {
    if (rechercher === "") {
      return true;
    } else {
      const dateSelectionnee = new Date(rechercher);
      const dateItem = new Date(item.dateInsertion);
      return (
        dateSelectionnee.toDateString() === dateItem.toDateString() ||
        dateSelectionnee.toISOString() === dateItem.toISOString()
      );
    }
  });

  const dataAffichee = dataFiltree.slice(start, end);

  return (
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
            {dataAffichee.map((item) => (
            <tr key={item.id}>
              <td>{new Date(item.dateInsertion).toLocaleDateString()}</td>
              <td>{item.temperature}</td>
              <td>{item.humsol}</td>
              <td>{item.humserre}</td>
              <td>{item.luminosite}</td>
            </tr>
            ))}
            </tbody>
            </table>
            <nav aria-label="Page navigation example">
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
          </nav>

      </div>
      );
      }

export default Sante;


