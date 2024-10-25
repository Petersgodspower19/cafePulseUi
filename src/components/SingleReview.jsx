import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";

function SingleReview({url, name}) {
  return (
    <div className='p-[10px] bg-white w-full md:w-[300px] rounded-[5px]'>
      <div className='flex items-center gap-2 mb-3'>
        <img src={url} alt='' className='w-[40px] rounded-full'/>
        <div className='flex flex-col gap-0.2'>
            <h1>{name}</h1>
            <div className='flex items-center gap-1'>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStar color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
       <IoStarHalfSharp color='#AB6B2E' size={20} className='w-[15px] md:w-[20]'/>
            </div>
        </div>
      </div>
      <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odio magnam fugit, velit similique debitis aut perspiciatis nihil repudiandae eligendi nostrum corrupti
         laborum nobis repellat tenetur sapiente. Praesentium veniam ut corrupti.</p>
    </div>
  )
}

export default SingleReview
