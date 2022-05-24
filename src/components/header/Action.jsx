import React from 'react'
import resume from '../../resume/PRANOTI SAVADI.pdf'


const Action = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contact"className='btn btn-primary'>Contact Details</a>
      
    </div>
  )
}

export default Action;