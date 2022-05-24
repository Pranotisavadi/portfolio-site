import React from 'react'
import Action from './Action';
import './Header.css'
import ME from "../../images/P4.jpg"
import Socials from './Socials';


const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Pranoti Savadi</h1>
      <h5 className = "text-light">Fullstack Developer</h5>
     <Action />
     <Socials />
     <div className="me">
       <img src={ME} alt="Pranoti"/>
     </div>
     <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
  </header>
  )
}

export default Header;