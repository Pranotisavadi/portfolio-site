import React from 'react'
import './Portfolio.css'
import proj1 from '../../images/boozybooks.PNG';
import proj2 from '../../images/giterdun.PNG';
import proj3 from '../../images/traveler.PNG';


const data =[
  {
    id: 1,
    image: proj1,
    title: 'Boozy Books',
    github: 'https://github.com/Pranotisavadi/FrontendProject',
    demo: 'https://www.google.com/'    
    },
    {
    id: 2,
    image: proj2,
    title: 'Git er Dun',
    github: 'https://github.com/Pranotisavadi/BackendGiterdun',
    demo: 'https://www.google.com/'
    },
    {
      id: 3,
      image: proj3,
      title: "Traveler's Scribble",
      github: 'https://github.com/Pranotisavadi/TravelBlog',
      demo: 'https://www.google.com/'
    },
    {
      id: 4,
      image: proj1,
      title: "YapYapChat",
      github: 'https://github.com/Pranotisavadi/yapyapchat',
      demo: 'https://www.google.com/'
    },
  

  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent work
      </h5>
      <h2>
        Portfolio
      </h2>
     <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo}) => {
           return(
          <article key={id} className="portfolio__item">         
          <div className="portfolio__item-image">
            <img src={image} alt={title} />     
          </div>
          <h3>
              {title}
            </h3>
           <div className="portfolio__item-cta">
             <a href={github} className=" btn" target='_blank' rel="noopener noreferrer">GitHub</a>
             <a href={demo} className=" btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
           </div>
        </article>
           )
         })
       }     
      

     </div>
    </section>
  )
}

export default Portfolio;