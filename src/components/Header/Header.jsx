import React, { useState } from 'react'

import Intro from '../Intro/Intro'
import Nav from '../Nav/Nav'
import './Header.css'

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }
  
  return (
    <header >       
      <Nav handleShow = {handleShow}/>
      <Intro show = {show} />       
    </header>   
  )
}

export default Header