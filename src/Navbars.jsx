import React from 'react'
import { useState } from 'react'

function Navbars() {

 


  

  return (
<> 
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand  fs-3 ms-2" href="#">Shoping-page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-center">
        <li class="nav-item ">
          <a class="nav-link  text-dark fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  fs-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  fs-5" href="#">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</>
    
  )
}

export default Navbars