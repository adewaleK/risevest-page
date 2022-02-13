
import { ArrowDownward } from '@mui/icons-material';
import React from 'react'

import "./Nav.css";

const Nav = ({handleShow}) => {
  return (
    <header className='nav-box'>
        <div className="left">
            <div className="logo">
              <h2>rise</h2>
              <div className='bob'></div>
            </div>
        </div>
        <nav className="right">
            <div className="links">
                <div className='menu-item'><p><a href="#">Home</a></p></div>
                <div className='menu-item align-elements' onClick={handleShow} >
                  <p><a href="#">Products</a></p>
                  <ArrowDownward className='arrow-down'/>
                </div>
                <div className='menu-item'><p><a href="#">Investment Club</a></p></div>
                <div className='menu-item'><p><a href="#">About Us</a></p></div>
                <div className='menu-item'><p><a href="#">FAQs</a></p></div>
                <div className='menu-item last-item'><p><a href="#">Blog</a></p></div>
            </div>
        </nav>  
    </header>
  )
}

export default Nav