import React from 'react'

function HeaderLink({to, children}) {
  return (
    <a href={`#${to}`}  className='text-md text-black no-underline 
    hover:underline hover:text-hover'>
      {children}
    </a>
  )
}

export default HeaderLink
