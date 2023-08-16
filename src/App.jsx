
import './App.css'
 
import React, { useState } from 'react'
import Navbars from './Navbars';
import Headers from './Headers';
import Cards from './Cards';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
  
  function App(props) {
     
    

  
    return (
      <div className='app'>
      <Navbars  />
     
      <Headers />
      
    <div id='main'>
    <Cards url="https://www.snitch.co.in/cdn/shop/products/Augusto_23rdFeb1102_1800x1800.jpg?v=1680671959" title="Classic Shirts" price="$250" />
    <Cards  url="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1873-06-M6551_800x.jpg?v=1681735573?v=43215488549026" title="Classic Shirts" price="$350"
    saletag={ <div class="badge bg-dark text-white position-absolute mt-2 ms-2">offer</div>}/>
    <Cards   url="https://www.snitch.co.in/cdn/shop/products/Augusto_1stMarch2244_1800x1800.jpg?v=1678813184" title="Cuban Collar Shirt" price="$240" />
    <Cards   url="https://www.snitch.co.in/cdn/shop/products/Snitch_23Oct21_2043_1800x1800.jpg?v=1635945426" title="T-shirt" price="$450"/>
    <Cards  url="https://www.snitch.co.in/cdn/shop/files/4MSS2191-02-M93_1800x1800.jpg?v=1691215374" title="Polo Shirt" price="$230"
    saletag={ <div class="badge bg-dark text-white position-absolute mt-2 ms-2">offer</div>}/>
    <Cards  url="https://www.snitch.co.in/cdn/shop/files/4MSS2149-05-M29_1800x1800.jpg?v=1690550733" title="Cuban Collar Shirt" price="$550" />
    <Cards  url="https://www.snitch.co.in/cdn/shop/products/Snitch_April22_0035_51c54da9-4905-4e32-9854-2dcdb6c842d4_1800x1800.jpg?v=1651226209" title="Office Shirt" price="$650"  />
    <Cards  url="https://www.snitch.co.in/cdn/shop/products/Snitch_9thNov21_5014_1800x1800.jpg?v=1637672523" title="Classic Short Sleeve T-Shirt" price="$550"
    saletag={ <div class="badge bg-dark text-white position-absolute mt-2 ms-2">Best sale</div>}/>
    </div>
      <Footer/>
      </div>
    )
  }
  
  export default App