import React, { useState, useEffect } from "react";
import "./Style2.css";
import auccuneDonnee from "../assets/auccuneDonnee.gif";
import axios from "axios";


function Archive() {
    
  const [donnee, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [userId, setUserId] = useState("");
  

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

  /* Pagination */
      // Calcul du nombre total de pages
      const pageCount = Math.ceil(donnee.length / itemsPerPage);
  
      // Fonction pour passer à la page suivante
      const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
      };
    
      // Fonction pour passer à la page précédente
      const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
      };
    
      // Fonction pour changer de page
      const handlePageChange = (pageNumber :any) => {
        setCurrentPage(pageNumber);
      };
    
      // Index de départ pour l'affichage des données
      const startIndex = (currentPage - 1) * itemsPerPage;
    
      // Index de fin pour l'affichage des données
      const endIndex = startIndex + itemsPerPage;
            /* Désararchivage */
      const handleClick = (userId:String) => {
        axios
          .put(`http://localhost:5000/api/desarchiver/${userId}`)
          .then((response) => {
            console.log(response.data.message);
            // Mettre à jour les données pour refléter l'archivage
            const updatedData = donnee.map((item:any) =>
              item._id === userId ? { ...item, etat: false } : item
            );
            setData(updatedData);
            window.location.pathname = '/Dashbord/Archive';

          })
          .catch((error) => {
            console.error(error);
          });
      };

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
        <a href="/Dashbord/Admin">
          <img className="ima" 
          src="../../src/assets/desarchi.png" 
          alt="Achivés" 
          title="liste des actifs"
          />
        </a>
      </div>
      <h4  className="titreActifArchive">Liste des utilisateurs archivés</h4>
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
              <td colSpan={5} id="dataNot">un utilisateur inexist!</td>
            </tr>
            </div>
          ) : (
            filteredData.slice(startIndex, endIndex).map((item: any)    => (
              <tr key={item.id}>
                <td>{new Date(item.createdAt).toLocaleDateString("fr-FR")}</td>
                <td>{item.id_canne}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                  <td className="desar">
                  <span
                      className="material-symbols-outlined"
                      onClick={() => handleClick(item._id)}
                      title="Désarchiver"
                    >
                      unarchive
                  </span>
                </td>
              </tr>
            ))
          )}
            </tbody>      
      </table>
      {/* pagination */}
      <div className="gap-4">
      <div className="containerPagination">
        {currentPage > 1 && (
          <button onClick={handlePrevPage} className="pagination">Précédent</button>
        )}
        <div>
        {currentPage < pageCount && (
          <button onClick={handleNextPage} className="pagination">Suivant</button>
        )}
        </div>
      </div>
      </div>
    </div>
  );
}


export default Archive;

