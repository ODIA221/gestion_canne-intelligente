


function Admin() {
    return(
 <div><nav classN="navbar navbar-expand-lg navbar-light bg-light">
 <div classN="container-fluid">
   <a classN="navbar-brand" href="#">Navbar</a>
   <button classN="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span classN="navbar-toggler-icon"></span>
   </button>
   <div classN="collapse navbar-collapse" id="navbarNav">
     <ul classN="navbar-nav">
       <li classN="nav-item">
         <a classN="nav-link active" aria-current="page" href="#">Home</a>
       </li>
       <li classN="nav-item">
         <a classN="nav-link" href="#">Features</a>
       </li>
       <li classN="nav-item">
         <a classN="nav-link" href="#">Pricing</a>
       </li>
       <li classN="nav-item">
         <a classN="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
       </li>
     </ul>
   </div>
 </div>
</nav></div>
<div className="container">
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
       
        );
        }
  

export default Admin;