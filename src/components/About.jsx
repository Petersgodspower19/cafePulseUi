import React from 'react';
import about from "../assets/image/about.jpg";
import Button from './Button';
import MenuButton from './MenuButton';

function About() {
  return (
    <div className='about px-6 py-12 w-full lg:w-[80%] xl:w-[70%] m-auto' id='about'>
      <h1 className='text-3xl md:text-4xl font-bold mb-9 text-center'>About Us</h1>
      
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
        <img src={about} alt='About Us' className='w-full lg:w-[50%] rounded-lg shadow-lg' />

        <div className='md:w-[50%] text-center lg:text-left w-[100%]'>
          <h2 className='text-2xl font-semibold mb-4'>What Makes Us Special</h2>
          <p className='mb-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit veniam molestias provident quaerat blanditiis, minima quam voluptates, architecto dignissimos accusantium
            inventore libero quidem harum natus tempore nesciunt, sapiente aliquam aut?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt dicta, numquam, ab architecto aperiam corrupti accusamus placeat voluptates delectus quibusdam blanditiis atque alias illo earum quaerat consectetur. 
            Ratione, reprehenderit!
          </p>
          <MenuButton>Learn More</MenuButton>
        </div>
      </div>
    </div>
  );
}

export default About;
