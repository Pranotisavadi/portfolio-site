import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi';

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I bring to the table.
      </h5>
      <h2>
        Education and Experience
      </h2>
      <div className="container service__container">
        {/* Education  */}
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>
          <ul className='service__list'>
          <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Quality Assurance in Software Development</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Bachelor of Science (Zoology)</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Master's in Management Studies.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Full Stack Development Bootcamp-Digitalcrafts</p>
            </li>
          </ul>
        </article>
        {/* END OF EDICATION */}


        {/* Experience */}
        <article className="service">
          <div className="service__head">
            <h3>Experience</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>QA Lead - Elavon Inc.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Sales And Marketing Head - Niche Industries</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Marketing Executive- Aptech Computers</p>
            </li>
          </ul>
        </article>

        {/* END OF EXPERIENCE */}

           {/* SERVICES */}
         {/* <article className="service">
          <div className="service__head">
            <h3>Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}

        {/* END OF SERVICES */}
      </div>
    </section>
  )
}

export default Services;