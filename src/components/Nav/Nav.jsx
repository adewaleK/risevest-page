import MenuIcon from '@mui/icons-material/Menu';

import { ArrowDownward } from '@mui/icons-material';
import React from 'react'
import Logo from '../Logo/Logo';
import "./Nav.css";

const Nav = ({handleShow}) => {
  
  return (
    <header className='nav-box'>
        <div className="left">
          <Logo bg="#08888f" color="#08888f" className="main-logo" />
        </div>
        <nav className="right">
            <div className="links">
                <div className='menu-item'><p><a href="https://risevest.com/">Home</a></p></div>
                <div className='menu-item align-elements' onClick={handleShow} >
                  <p><a href="https://risevest.com/">Products</a></p>
                  <ArrowDownward className='arrow-down'/>
                </div>
                <div className='menu-item'><p><a href="https://risevest.com/">Investment Club</a></p></div>
                <div className='menu-item'><p><a href="https://risevest.com/">About Us</a></p></div>
                <div className='menu-item'><p><a href="https://risevest.com/">FAQs</a></p></div>
                <div className='menu-item last-item'><p><a href="https://risevest.com/">Blog</a></p></div>
                <MenuIcon className='menu-icon' />
            </div>
        </nav>  
    </header>
  )
}

export default Nav