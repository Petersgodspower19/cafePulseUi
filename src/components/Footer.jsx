import React from 'react'
import { SiCoffeescript } from "react-icons/si";
import HeaderLink from './Link';

function Footer() {
  return (
    <div className='bg-footer  px-3 py-4 lg:px-16 
    lg:py-4 w-full'>
      <div className='flex flex-col md:flex-row gap-4   items-start justify-between'>
      <div className='flex flex-col gap-3'>
      <div className='flex items-center'>
          <SiCoffeescript size={32} color='black' />
          <h1 className='font-bold black text-xl'>CafePulse</h1>
        </div>
        <p className='w-full md:w-[300px]'>Welcome to our coffee havel!. Explore our aromatic brews, savor artisanal flavours, and discover
            the perfect roast to elevate your daily ritual.
        </p>
      </div>
       <div className='flex flex-col gap-3'>
        <h1 className='font-bold black text-xl'>Links</h1>
         <div className='flex flex-col gap-2'>
        <HeaderLink to="about">About</HeaderLink>
        <HeaderLink>Membership</HeaderLink>
        <HeaderLink>Event</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
         </div>
       </div>
       <div className='flex flex-col gap-3'>
       <h1 className='font-bold black text-xl'>Menu</h1>
       <div className='flex flex-col gap-2'>
          <HeaderLink>Cappuccino</HeaderLink>
          <HeaderLink>Latte</HeaderLink>
          <HeaderLink>Americano</HeaderLink>
       </div>
       </div>
       <div className='flex flex-col gap-3'>
       <h1 className='font-bold black text-xl'>Contact Us</h1>
       <div className='flex flex-col gap-2'>
        <HeaderLink>CoffePulse@gmail.com</HeaderLink>
        <HeaderLink>+123- 456- 789</HeaderLink>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
