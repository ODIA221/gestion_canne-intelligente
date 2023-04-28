import React, { useState, useEffect } from "react";
import "./Style2.css";


function Admin() {
/* 
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

  const dataAffichee = dataFiltree.slice(start, end); */


    return(
      <div className="container" style={{width: "100vw"}}>
      <div className="form-group d-flex">
        <input className="rech" placeholder=" recherchez un utilisateur ..."/>
      </div>
     <h6>Liste de tous les utilisateurs actifs</h6>

      <table className="table border border-dark mt-4">
        <thead className="the">
          <tr>
            <th>ID Cane</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {/* {dataAffichee.map((item) => ( */}
            <tr>
              <td>mammmm</td>
              <td>ppppp</td>
              <td>kkkkk</td>
              <td className="ico"><span className="material-symbols-outlined">
archive
</span></td>
            </tr>
{/*             ))}
 */}            </tbody>
            </table>
           {/*  <nav aria-label="Page navigation example">
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