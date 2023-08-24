
import './App.css'

import React from 'react'
import Navbars from './Navbars';
import Headers from './Headers';
import Cards from './Cards';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [count, setcount] = useState(0);

  const datareceive = (data) => {
    setcount(data)

  }


  return (
    <div className='app'>
      <Navbars countdata={count} />

      <Headers />

      <div id='main'>
        <Cards url="https://www.snitch.co.in/cdn/shop/products/Augusto_23rdFeb1102_1800x1800.jpg?v=1680671959" title="Nameic Shirts" price="$250" data={datareceive} />
        <Cards url="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1873-06-M6551_800x.jpg?v=1681735573?v=43215488549026" title="Nameic Shirts" price="$350" data={datareceive}
        />
        <Cards url="https://www.snitch.co.in/cdn/shop/products/Augusto_1stMarch2244_1800x1800.jpg?v=1678813184" title="Cuban Collar Shirt" price="$240" data={datareceive} />
        <Cards url="https://www.snitch.co.in/cdn/shop/products/Snitch_23Oct21_2043_1800x1800.jpg?v=1635945426" title="T-shirt" price="$450" data={datareceive} />
        <Cards url="https://www.snitch.co.in/cdn/shop/files/4MSS2191-02-M93_1800x1800.jpg?v=1691215374" title="Polo Shirt" price="$230" data={datareceive}
        />
        <Cards url="https://www.snitch.co.in/cdn/shop/files/4MSS2149-05-M29_1800x1800.jpg?v=1690550733" title="Cuban Collar Shirt" price="$550" data={datareceive} />
        <Cards url="https://www.snitch.co.in/cdn/shop/products/Snitch_April22_0035_51c54da9-4905-4e32-9854-2dcdb6c842d4_1800x1800.jpg?v=1651226209" title="Office Shirt" price="$650" data={datareceive} />
        <Cards url="https://www.snitch.co.in/cdn/shop/products/Snitch_9thNov21_5014_1800x1800.jpg?v=1637672523" title="Nameic Short Sleeve T-Shirt" price="$550" data={datareceive}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App