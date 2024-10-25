import React from 'react';
import { SiCoffeescript } from "react-icons/si";
import HeaderLink from './Link';
import Button from './Button';
import { IoMenu } from "react-icons/io5";

function Header({ onMenuClick }) {
  return (
    <header className='flex items-center justify-between px-3 py-4 lg:px-16 
    lg:py-4 w-full fixed z-1000 bg-gradient shadow-lg'>
        <div className='flex items-center'>
          <SiCoffeescript size={32} color='black' />
          <h1 className='font-bold black text-xl'>CafePulse</h1>
        </div>
        <div className='md:flex items-center gap-3 hidden'>
            <HeaderLink to="home">Home</HeaderLink>
            <HeaderLink to="menu">Menu</HeaderLink>
            <HeaderLink to="about">About Us</HeaderLink>
            <HeaderLink to="">Products</HeaderLink>
            <HeaderLink to="reviews">Reviews</HeaderLink>
        </div>
        <div className='hidden md:block'>
          <Button>LogIn</Button>
        </div>
        <IoMenu size={32} className='md:hidden cursor-pointer' onClick={onMenuClick} />
    </header>
  );
}

export default Header;
