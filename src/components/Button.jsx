import React from 'react'

function Button({children}) {
  return (
    <button className=' bg-backgroundColor text-brightColor rounded-[15px]  button h px-[10px] button'>
      {children}
    </button>
  )
}

export default Button
