import MenuIcon from '@mui/icons-material/Menu';

import { ArrowDownward } from '@mui/icons-material'
import './MNav.css'
import { useState } from 'react';

const MNav = () => {
  return (
    <section className='mnav-box'>
        <div className="home space">    
            <a href="#"><p>Home</p></a>
        </div>
        <div className="products space">
            <div className="text">
                <a href="#"><p>Products </p></a>
                <ArrowDownward />
            </div>
        </div>
        <div className="home space">    
            <a href="#"><p>Investment Club</p></a>
        </div>
        <div className="home space">    
            <a href="#"><p>About Us</p></a>
        </div>
        <div className="home space">    
            <a href="#"><p>FAQs</p></a>
        </div>
        <div className="home space">    
            <a href="#"><p>Blog</p></a>
        </div>
    </section>
  )
}

export default MNav