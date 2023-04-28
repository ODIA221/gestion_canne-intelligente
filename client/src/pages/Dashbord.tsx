import React from 'react'
import {Outlet  } from "react-router-dom";
import Header from '../Component/Header';
import "./Style2.css";
const Dashboard = () => {
  return (
    <>
    <Header/>
    <div id='container2'>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Dashboard