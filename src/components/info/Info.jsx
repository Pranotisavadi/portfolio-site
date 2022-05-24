import React from 'react'
import './Info.css'
import ME from "../../images/P2.jpg"
import {MdDeveloperBoard} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'
import {ImProfile} from 'react-icons/im'
  
const Info = () => {
  return (
  <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img  src={ME} alt="Pranoti"></img>
        </div>
        
      </div>
      <div className="about__content">
        <div className="about__cards">          
          <article className="about__card">
            <ImProfile className="about__icon"/>
            <h5>More About Me</h5>
            <small>Education and Experience </small>
          </article>
          <article className="about__card">
            <MdDeveloperBoard className="about__icon"/>
            <h5>Skills</h5>
            <small>Frontend and Backend Development</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>Full Stack Developer</small>
          </article>
        </div>
          <p>My name is Pranoti. I am a aspiring full stack developerbased in Atlanta, Georgia.            I work in the fintech industry and lead a team of Quality Engineers. I am ready to take the plunge into the world of software development. 
          </p>
          <p>
          In my free time I enjoy hiking in the mountains of North Georgia. I enjoy travelling and exploring new places. 
            </p>     
         
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>

  </section>
  )
}

export default Info;
