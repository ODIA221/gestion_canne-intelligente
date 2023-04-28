import React from 'react'
import {Outlet  } from "react-router-dom";
import Header from '../Component/Header';
import "./Style2.css";
import Sidebar from '../Component/Sidebar';
const Dashboard = () => {
  return (
    <>
    <Header/>
    <div id='container2'>
    <Sidebar/>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Dashboard