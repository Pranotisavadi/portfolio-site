import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_80gic7w', 'template_gutusd2', form.current, 'dC8gVtk1OoSvefQqi')

    e.target.reset();

      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (
    <section id='contact'>
      <h5>
        Get in Touch
      </h5>
      <h2>
        Contact Me
      </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>pranoti.savadi@gmail.com</h5>
            <a href="mailto:pranoti.savadi@gmail.com" target='_blank' rel="noopener noreferrer">Send a message.</a>          
          </article>  
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact;
