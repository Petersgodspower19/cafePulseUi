import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import MenuButton from './MenuButton';

function SingleProduct({url, name}) {
  return (
    <div className='bg-white p-[10px]  w-full md:w-[300px]  text-start rounded-[8px]'>
      <img src={url} alt='' className='rounded-[8px] mb-2' />
      <h1 className='mb-2 font-bold text-xl text-center'>{name}</h1>
      <div className='flex justify-center items-center mb-3'>
      <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStarHalfSharp color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
      </div>
      <div className='text-center'>
      <p>$15.99</p>
      <MenuButton>Add To Cart</MenuButton>
      </div>
    </div>
  )
}

export default SingleProduct
