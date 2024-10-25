import React, { useEffect } from 'react';
import image from "../assets/image/home.png";
import Button from './Button';


function Home() {
  

  return (
    <div className='bg-home md:px-13 md:py-13 pt-20 flex items-center justify-around' id='home'>
      <div className='w-[500px]'>
        <h1 className='text-2xl md:text-4xl font-bold h1 mb-3'>
          Start your day with a steaming cup of coffee
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in the morning
        </p>
        <div className='flex items-center gap-2 uppercase mt-4'>
          <Button>Add to Cart</Button>
          <Button>More Menu</Button>
        </div>
      </div>
      <div className='hidden md:block'>
        <img src={image} alt=''  />
      </div>
    </div>
  );
}

export default Home;
