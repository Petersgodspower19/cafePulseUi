import React from 'react'
import SingleProduct from './SingleProduct'
import prod1 from "../assets/image/product1.jpg"
import prod2 from "../assets/image/product2.jpg"

function Products() {
  return (
    <div className='px-12 py-12'>
        <h1 className='text-2xl md:text-4xl font-bold h1 mb-3 text-center'>Our Products</h1>
        <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-3'>
            <SingleProduct url={prod1} name="Nepresso"/>
            <SingleProduct url={prod2} name="AeroPress"/>
            <SingleProduct url={prod1} name="Chemex"/>
        </div>
      
    </div>
  )
}

export default Products
