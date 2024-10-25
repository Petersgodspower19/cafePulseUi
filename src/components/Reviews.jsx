import React from 'react'
import SingleReview from './SingleReview'
import img1 from "../assets/image/pic1.png"
import img2 from "../assets/image/pic2.png"
import img3 from "../assets/image/pic3.png"

function Reviews() {
  return (
    <div className='px-12 py-12' id='reviews'>
       <h1 className='text-2xl md:text-4xl font-bold h1 mb-3 text-center'>Customers Reviews</h1>
       <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-3'>
        <SingleReview url={img1} name="Olivia Ava"/>
        <SingleReview  url={img2} name="John Deo"/>
        <SingleReview url={img3} name="Sofia Zoe"/>
       </div>
    </div>
  )
}

export default Reviews
