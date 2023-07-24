import './Navbar.css';

import React, { useEffect, useState } from 'react'
import logo from '../assets/netflix-logo.png'
import avatar from '../assets/netflix-avatar.png'

const Navbar = () => {

    const [show, handleShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else handleShow(false);
    });
    return ()=>{
        window.removeEventListener("scroll");
    }
  }, [])  
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt='netflix-logo' className='nav_logo'/>
      <img src={avatar} alt='netflix-avatar' className='nav_avatar' />
    </div>

  )
}

export default Navbar;
