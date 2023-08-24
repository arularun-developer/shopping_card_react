import React from 'react'


function Navbars(props) {
// console.log("🚀 ~ file: Navbars.jsx:5 ~ Navbars ~ props:", props)




  return (
<> 
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand  fs-3 ms-2" href="#">Shoping-page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item ">
          <a className="nav-link  text-dark fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  fs-5" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  fs-5" href="#">Contact</a>
        </li>
      </ul>
    </div>
  <form className="d-flex justify-content-center me-2 px-5"> 
         <button className="btn btn-outline-dark" type="submit">
                 Cart
       <span className="badge bg-dark text-white ms-1 rounded-pill">{props.countdata}</span>
     
       
         </button>
    </form>
    
  </div>
</nav>
</>
    
  )
}

export default Navbars
