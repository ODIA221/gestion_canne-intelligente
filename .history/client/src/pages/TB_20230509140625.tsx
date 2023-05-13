import React from 'react'



const TB = () => {
  return (
    <div className='container w-75 h-75 d-flex me-0 gap-2 justify-content-center'>
    <div id='dashboardSousContainer' className=' border w-50 p-3 shadow p-3 mb-5 bg-body rounded'>
        
        <div  className='border p-2 mt-3'>
            <h5>Rythme cardiaque</h5>
            <h6>80 bat/min</h6>
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

export default TB