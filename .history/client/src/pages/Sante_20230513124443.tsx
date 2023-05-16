import React, { useState, useEffect, ChangeEvent } from "react";
import "./Style2.css";

function Sante(){
  const [donnee, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [rechercher, setRecherche] = useState("");
  const [cacher2, setCacher2] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);


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
        const donneeAvecDate = res.map((item: any) => ({
          ...item,
          dateInsertion: Date.now(),
        }));
        setData(donneeAvecDate);
      });
  }, []);

  const handleSearch = (event: { target: { value: any; }; }) => {
    const valeur = event.target.value;
    setRecherche(valeur);
  };
  

  const handlePagination = (page: number) => {
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
        <thead>
          <tr>
            <th>Jours</th>
            <th>Données (°C)</th>
            
          </tr>
          </thead>
          <tbody>
            {dataAffichee.map((item) => (
            <tr key={item.id}>
              <td>{new Date(item.dateInsertion).toLocaleDateString()}</td>
              <td>{item.pression}</td>
             
            </tr>
            ))}
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
           <div className="containerPagination">
        {currentPage > 1 && (
          <button onClick={handlePrevPage} className="pagination">Précédent</button>
        )}
        {currentPage < pageCount && (
          <button onClick={handleNextPage} className="pagination">Suivant</button>
        )}
      </div>

      </div>
      );
      }

export default Sante;




