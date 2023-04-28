import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div id="ContainerbtnSidebar">
        <button id="btnSidebar"><Link to='Modifmdp'> Modification profil </Link></button>
        <button id="btnSidebar"><Link to='Donneconcerne'>  Données du conserné</Link></button>
        <button id="btnSidebar"><Link to='Sante'>  Santé</Link></button>
        <button id="btnSidebar"><Link to='Deplacement'>  Déplacement</Link></button>
    </div>
  )
}

export default Sidebar