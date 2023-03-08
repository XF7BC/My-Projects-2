import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5>Get to Know</h5> 
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="me-about" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>1+ Years Working </small>
          </article>
          <article className="about__card">
            <FiUser className="about__icon"/>
            <h5>Clients</h5>
            <small>None </small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>None  </small>
          </article>
        </div>
        <p>
          I am a Fromtend Developer aspiring to be  a Fullstack Developer, 
          I am exerienced in Frontend development and possess only basic knowledge in Backend development. I do have experience in UI/UX designing and I am proficient in using Figma.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About