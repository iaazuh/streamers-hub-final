import React, { useEffect, useState } from 'react'
import './Navbar.css'


function Navbar() {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, [])

  return (
  <div className={`nav ${show && 'nav_black'}` }>
        <a href="/">
          <img
            className='nav_logo'
            src='\images\log-removebg-preview.png'
            alt='website logo'
          />
        </a>
        
        <a href="/">
          <img
            className='nav_avatar'
            src='\images\avatar-removebg-preview.png'
            alt='profile avatar'
          />
        </a>
        
    </div>
  )
}

export default Navbar