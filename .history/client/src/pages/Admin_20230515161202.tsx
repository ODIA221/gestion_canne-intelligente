import React, { useState, useEffect, useRef } from "react";
import "./Style2.css";
import auccuneDonnee from "../assets/auccuneDonnee.gif";
import axios from "axios";

function Admin() {
  const [donnee, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [userId, setUserId] = useState("");




  /* hooks msg confirmation */
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: ""
  });

  const idProductRef = useRef<string | null>(null);

  const handleDialog = (message: string, isLoading: boolean, nameProduct: string) => {
    setDialog({
      message,
      isLoading,
      nameProduct
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        const donneeAvecDate = res.map((item: any) => ({
          ...item,
          dateInsertion: Date.now()
        }));
        setData(donneeAvecDate);
      });
  }, []);

  const filteredData = donnee.filter((item: any) =>
    item.id_canne.includes(searchTerm)
  );

  const pageCount = Math.ceil(donnee.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;


  /* popup confirmation désarchiver */
  const handleClick = (userId: string) => {
    idProductRef.current = userId;
    handleDialog("Voulez-vous vraiment archiver cette utilisateur ?", false, "", 
    );
  };

  const handleConfirmation = (choose: boolean) => {
    if (choose && idProductRef.current !== null) {
      axios
        .put(`http://localhost:5000/api/archiver/${idProductRef.current}`)
        .then((response) => {
          console.log(response.data.message);
          const updatedData = donnee.map((item: any) =>
            item._id === idProductRef.current ? { ...item, etat: false } : item
          );
          setData(updatedData);
          window.location.pathname = "/Dashbord/Admin";
        })
        .catch((error) => {
          console.error(error);
        });
    }
    handleDialog("", false, "");
  };



      

  return (
    <div className="container" style={{ width: "75vw" }}>
      <div className="form-group d-flex">
        <input
          className="rech"
          placeholder=" recherche par Id canne"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* lien pour voir la liste des archivés */}
        <a href="/Dashbord/Archive">
          <img
            className="ima"
            src="../../src/assets/archi.png"
            alt="Achivés"
            title="liste des archivés"
          />
        </a>
      </div>
      <h4 className="titreActifArchive">Liste des utilisateurs actifs</h4>
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
              
              <img src={auccuneDonnee} alt="Aucune donnée" />
              <td colSpan={5} id="dataNot">un utilisateur inexistant !</td>
            </tr>
            </div>
          ) : (
            filteredData.slice(startIndex, endIndex).map((item: any)    => (
              <tr key={item.id}>
                <td>{new Date(item.createdAt).toLocaleDateString("fr-FR")}</td>
                <td>{item.id_canne}</td>
                <td>{item.prenom}</td>
                <td>{item.nom}</td>
                <td className="ico">
                  <span
                      className="material-symbols-outlined"
                      onClick={() => handleClick(item._id)}
                      title="Archiver"
                    >
                      archive
                  </span>
                
                className="ico">
                <span className="material-symbols-outlined">
                  info
                </span>   
                        

              </tr>
            ))
          )}
        </tbody>
        </table>
      {/* pagination */}
      <div className="containerPagination gap-5">
        {currentPage > 1 && (
          <button onClick={handlePrevPage} className="pagination">Précédent</button>
        )}
        {currentPage < pageCount && (
          <button onClick={handleNextPage} className="pagination">Suivant</button>
        )}
      </div>

          {/* Pop-up  de confirmation désarchivage*/}
    {dialog.message && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "#d3eaeb",
          padding: "20px",
          borderRadius: "10px",
          width: "30%",
          height: "30%"

        }}
        >
          <div className="dialog-content">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color:"black"
              }}
            >
              {dialog.message}
            </p>
            <div className="dialog-buttons">
              <button
                onClick={() => handleConfirmation(true)}
                disabled={dialog.isLoading}
                style={{
                  background: "red",
                  color: "white",
                  padding: "10px",
                  marginRight: "4px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <p
                  style={{
                    fontWeight:"bold"
                  }}
                >
                  Oui
                </p>
              </button>
              <button
                onClick={() => handleConfirmation(false)}
                disabled={dialog.isLoading}
                style={{
                  background: "green",
                  color: "white",
                  padding: "10px",
                  marginLeft: "4px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <p
                  style={{
                    fontWeight:"bold"
                  }}
                >
                  Non
                </p>
              </button>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Admin;




 
