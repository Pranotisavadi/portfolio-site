import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href ="https://linkedin.com" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a> 
         <a href ="https://github.com" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default Socials;