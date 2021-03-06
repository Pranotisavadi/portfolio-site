import React from 'react'
import './Footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
     <a href="#" className='footer__logo'>Go to Top</a>
     <ul className='permalinks'>
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#skills">Skills</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
     <a href ="https://linkedin.com" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a> 
      <a href ="https://github.com" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
     </div>
   </footer>
  )
}

export default Footer;