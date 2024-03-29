import React from 'react';
import About from './about/index';
import About2 from './about2/index'
import "./body.css";
import Contact from './contact/index';
import Projects from './projects/index';
import Skills from './skills/index';
function Body() {
  return (
  <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='about2'>
        <About2/>
      </section>
      <section id="project">
        <Projects/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      </div>
  )
}

export default Body