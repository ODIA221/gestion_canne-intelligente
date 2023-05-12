import React, { useState } from 'react'
import {Outlet  } from "react-router-dom";
import Header from '../Component/Header';
import "./Style2.css";
import Sidebar from '../Component/Sidebar';

const Dashbord = () => {
  let [user, etatUser] = useState(true);
  return (
    <div id='container2'>
      <Header/>
      
    {!user ? <div id='containerSidebar'><Sidebar/></div>: <></> }
    
    <Outlet></Outlet>
    </div>
  )
}

export default Dashbord