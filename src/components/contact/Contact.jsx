import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_XF7BC', 'template_p91fjgi', form.current, 'aS7z49i5xD9kbigt0')
     e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abiolaajibola958@gmail.com</h5>
            <a href="mailto:abiolaajibola958@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ajibola Abiola</h5>
            <a href="https://m.me/ajibola.abiola" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348116865934</h5>
            <a href="https://api.whatsapp.com/send?phone+2348116865934" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder="Your Full Name" required />
          <input type="email" name="email" id=""  placeholder="Your Email" required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'> Send A Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact