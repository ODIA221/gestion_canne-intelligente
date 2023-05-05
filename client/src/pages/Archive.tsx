import React, { useState, useEffect } from "react";
import "./Style2.css";
import auccuneDonnee from "../assets/auccuneDonnee.gif";


function Archive() {
    
  const [donnee, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  /* recupération liste des archiver */

  useEffect(() => {
    fetch("http://localhost:5000/api/listeArches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const donneeAvecDate = res.map((item:any) => ({
          ...item,
          dateInsertion: Date.now(),
        }));
        setData(donneeAvecDate);
      });
  }, []);

  /* recherhe */

  const filteredData = donnee.filter((item: any) =>
    item.id_canne.includes(searchTerm)
  );

  
  return (
    <div className="container" style={{ width: "75vw" }}>
      <div className="form-group d-flex">
        {/* recherche */}
      <input
          className="rech"
          placeholder=" recherche par ID canne..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* lien pour voir la liste des actifs */}
        <a href="/Dashboard/Admin">
          <img className="ima" 
          src="../../src/assets/desarchi.png" 
          alt="Achivés" 
          title="liste des actifs"
          />
        </a>
      </div>
      <h4>Liste des utilisateurs archivés</h4>
      <table className="table border border-dark mt-4">
        <thead className="the">
          <tr>
            <th>Date</th>
            <th>ID Cane</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>


          <tbody>
             
          {filteredData.length === 0 ? (
            <div id="notData">
            <tr>
              <img  src={auccuneDonnee} alt="Aucune donnée"  />
              <td colSpan={5} id="dataNot">un utilisateur qui n'esiste pas  archivé !</td>
            </tr>
            </div>
          ) : (
            filteredData.map((item: any) => (
              <tr key={item.id}>
                <td>{new Date(item.createdAt).toLocaleDateString("fr-FR")}</td>
                <td>{item.id_canne}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td className="ico">
                  <span className="material-symbols-outlined">archive</span>
                </td>
              </tr>
            ))
          )}
            </tbody>      
      </table>
              {/* pagination */}
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


export default Archive;

