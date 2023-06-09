import './Style1.css'
import logoOumaAgri from '../assets/OUMATECH.png'
import serre from '../assets/canne.png'
import image1 from '../assets/imgHeader.png'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm } from "react-hook-form";
import  io from 'socket.io-client';

function Header() {
  let [user, etatUser] = useState(true);
  const navigate = useNavigate()
  return (
    <div id='entête'>

      {/* //Menu de navigation */}
      {!user ? 
      <div id='menuNav' >
      <button id="btnMenuNav"><Link to="/Dashboard"> Tableau de bord </Link></button>
      <button id="btnMenuNav"><Link to="/">Se déconnecter </Link></button> 
    </div>:
           <div id='menuNav' >
           <button id="btnMenuNav"><Link to="/Dashboard/Admin" className='lien'> Tableau de bord  </Link></button>
           <button id="btnMenuNav"><Link to="/Dashboard/Inscription" className='lien'> Inscrire un utilisateur </Link></button> 
   
           <select id="btnMenuNav" onChange={(e) => navigate(e.target.value)}>
             <option>Compte</option>
             <option value='/Dashboard/Modifmdp'>Modification mot de passe</option>
             <option value='/'>Déconnexion</option>
           </select>
         </div>
   
       }
      {/* //logo, description et photo serre */}
      <div id='infoNav' >
        <div > <img src={logoOumaAgri} id="imageHeader" alt="Logo Ouma Agri" /></div>
        <div id="textHeader"> Sur cette plateforme vous pourrez avoir les informations relatives au groupe, <br/>
sur ses produits et également visualiser  l’état et la localisation de votre canne à temps réel
  </div>
        <div><img src={serre} id="imageHeaderD" alt="serre" /></div>
      </div>
      {/* Valeur à temp réel */}
        <div id="VTR">
          <img src={image1} id="ImageVTR" alt="" />
        </div>
      </div>
    

  )}

export default Header;