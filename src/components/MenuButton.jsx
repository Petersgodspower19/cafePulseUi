import React from 'react'

function MenuButton({children}) {
  return (
    <button className='bg-menuButtonColor text-brightColor rounded-[5px]
     h-[30px] button h px-4'>
      {children}
    </button>
  )
}

export default MenuButton
