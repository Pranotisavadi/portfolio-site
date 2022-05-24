import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full} from 'react-icons/di';
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {GrReactjs, GrMysql} from 'react-icons/gr';
import {BsFillPatchCheckFill} from 'react-icons/bs'
import{SiPostgresql, SiMongodb, SiRedux} from 'react-icons/si'


const Skills = () => {
  return (
    <section id='skills'>
      <h5>The skills that I have</h5>
      <h2>Skills</h2>

      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">

            <article className="skill__details">
              <AiFillHtml5  className="skill__details-icon" />
              <div>
              <h4>HTML5</h4> 
              </div>                
            </article>

            <article className="skill__details">
            <DiCss3Full className="skill__details-icon" />
            <div>
            <h4>CSS</h4> 
            </div>              
            </article>

            <article className="skill__details">
            <IoLogoJavascript className="skill__details-icon" />
            <div>
            <h4>JavaScript</h4>
            </div>                
            </article>

            <article className="skill__details">
            <FaBootstrap  className="skill__details-icon" />
            <div>
            <h4>BootStrap</h4>
            </div>                
            </article>

            <article className="skill__details">
            <GrReactjs  className="skill__details-icon" />
            <div>
              <h4>React</h4>
            </div>                
            </article>

            <article className="skill__details">
            <BsFillPatchCheckFill className="skill__details-icon" />
            <div>
            <h4>Material UI</h4>
            </div>                
            </article>
            
          </div>

        </div>
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">

            <article className="skill__details">
              <GrMysql  className="skill__details-icon" />
              <div>
              <h4>MySQL</h4>
              </div>                 
            </article>

            <article className="skill__details">
            <SiPostgresql  className="skill__details-icon" />
            <div>
            <h4>PostgresSQL</h4> 
            </div>               
            </article>

            <article className="skill__details">
            <IoLogoNodejs className="skill__details-icon"  />
            <div>
            <h4>Node.js</h4>
            </div>               
            </article>

             <article className="skill__details">
            <BsFillPatchCheckFill className="skill__details-icon" />
            <div>
            <h4>Mongoose</h4> 
            </div>
            </article>

            <article className="skill__details">
            <SiMongodb  className="skill__details-icon" />
            <div>
            <h4>MongoDB</h4>
            </div>               
            </article>

            <article className="skill__details">
            <SiRedux  className="skill__details-icon" />
            <div>
            <h4>Redux</h4> 
            </div>               
            </article>
            
          </div>

      </div>

      </div>
      
    </section>
  )
}

export default Skills;