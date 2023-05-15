import React from 'react';
import  io from 'socket.io-client';
import { useState, useEffect } from 'react'


// const [myBPM, setMyBPM] = useState(0)
// const [seconde, setSeconde] = useState('')
//   const [minute, setMinute] = useState('')
//   const [heure, setHeure] = useState('')
//   const [mois, setMois] = useState('')
//   const [jour, setJour] = useState('')
//   const [annee, setAnnee] = useState('')
//   const [periode, setPeriode] = useState('')




const TB = () => {

  const myBPM = 0
  let seconde : any 
  let minute : any 
  let heure : any 
  let mois : any 
  let jour : any 
  let annee : any 
  let periode: any 
    useEffect(() => {
        if (heure === "16" && minute === "49" && seconde === "00") {
        fetch("http://localhost:5000/api/envoi", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              jour: periode,
              myBPM:  myBPM,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
             
            });
          } 
      }, []);
  
    setInterval(() => repeter(), 1000);
  
    const repeter = () => {
  
  
      let currentDate = new Date().getDate() 
     + '/0' +(parseInt(String(new Date().getMonth())) +1) + '/0'+ new Date().getFullYear()
  
  
      let date = new Date();
      let seconde = date.getSeconds();
      let minute = date.getMinutes();
      let heure = date.getHours();
      let mois = date.getMonth() + 1;
      let annee = date.getFullYear();
      let jour = new Date().getDate() 
      let moisStr = mois.toString()
      let jourStr = jour.toString()
  
      if (mois < 10) {
        moisStr = "0"+mois;
      }
      if (jour < 10) {
        jourStr = "0"+jour;
      }
  
      // seconde = seconde.toString();
      // setMinute(minute.toString());
      // setHeure(heure.toString());
      // setAnnee(annee.toString());
      // setMois(moisStr);
      // setJour(jourStr);
  
      // setPeriode(currentDate.toString())
  
  
    };
  


    // const socket = io('ws://localhost:5000');
    // socket.on('data', (data) => {
    //   setmyBPM(data.myBPM)
        
    // })
    

  return (
    <div className='container w-75 h-75 d-flex me-0 gap-2 justify-content-center'>
    <div id='dashboardSousContainer' className=' border w-50 p-3 shadow p-3 mb-5 bg-body rounded'>
        
        <div  className='border p-2 mt-3'>
            <h5>Rythme cardiaque</h5>
            <h6>{myBPM}</h6>
        </div>
        <div  className='border p-2'>
            <h5>Alerter</h5>
            <button className='btn btn-danger'> Envoie alert</button>
        </div>
        <div   className='border p-2'>
            <h5>État</h5>
            <span className='p-2  bg-success text-white'>Pas danger</span>
        </div>
        <div   className='border p-2'>
            <h5>Géolocalisation</h5>
            <span className='p-2  bg-success text-white'>Active</span>
        </div>
    </div>
    <div id='dashboardSousContainer' className='w-50 shadow p-1 mb-5 bg-body rounded'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0507557503092!2d-17.471413485713548!3d14.709721789733042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173b9452a5ad5%3A0xb798e476c4492163!2sFabrique%20Simplon%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1679420405682!5m2!1sfr!2ssn"
            width="100%" height="350" style={{ border: 0 }} loading="lazy">
        </iframe>
    </div>
    </div>
  )
}

export default TB;