import React, { useEffect } from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";
import MenuButton from './MenuButton';
import Aos from 'aos';
import "aos/dist/aos.css"

function SingleCofee({url, name}) {
  return (
    <div className='bg-white p-[10px]  w-full md:w-[300px]  text-start rounded-[8px]' >
      <img src={url} alt='' className='rounded-[8px] mb-2' />
      <h1 className='mb-2 font-bold text-xl'>{name}</h1>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <MenuButton>Hot</MenuButton>
            <MenuButton>Cold</MenuButton>
        </div>
    <FaCartShopping size={25} className='p-[5px] bg-menuButtonColor rounded-full'/>
      </div>
    </div>
  )
}

export default SingleCofee
