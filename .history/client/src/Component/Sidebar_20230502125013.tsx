import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div id="ContainerbtnSidebar" className=''>
        <button id="btnSidebar"><Link to='Modifmdp' className='links'> Modification profil </Link></button>
        <button id="btnSidebar"><Link to='Donneconcerne' className='links'>  Données du conserné</Link></button>
        <button id="btnSidebar"><Link to='Sante' className='links'>  Santé</Link></button>
        <button id="btnSidebar"><Link to='Deplacement' className='links'>  Déplacement</Link></button>
    </div>
  )
}

export default Sidebar