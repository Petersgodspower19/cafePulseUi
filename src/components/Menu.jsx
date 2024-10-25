import React from 'react'
import SingleCofee from './SingleCofee'
import menu1 from "../assets/image/menu1.jpg"
import menu2 from "../assets/image/menu2.jpg"
import menu3 from "../assets/image/menu3.jpg"
import menu4 from "../assets/image/menu4.jpg"
import menu5 from "../assets/image/menu5.jpg"

function Menu() {
  return (
    <div className='text-center px-12 py-12' id='menu'>
       <h1 className='text-2xl md:text-4xl font-bold h1 mb-3'>Our Menu</h1>
       <div className='cofee'>
        <SingleCofee url={menu1} name="Expresso" />
        <SingleCofee url={menu2} name="Expresso" />
        <SingleCofee url={menu3} name="Expresso" />
        <SingleCofee url={menu4} name="Expresso" />
        <SingleCofee url={menu5} name="Expresso" />
        <SingleCofee url={menu1} name="Expresso" />
       </div>
    </div>
  )
}

export default Menu
