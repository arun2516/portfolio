import React from 'react'
import Seperator from '../../common/social-contact/seperator/index'
import "./about2.css"
function About2() {
  return (
    <div className='about2'>
        <Seperator/>
        <label className='section-title'>About</label>
        <div className='about-top'>
         
          <div className='about-photo'>
            <img className='picture' src={require("../../../assets/about22.png")} alt="coder_image"/>
          </div>
          <div className='about-info'>
              <p style={{textAlign: 'center'}}>Know Who <span style={{color:'blue'}}>I'm</span></p>
              <section>Hi Everyone, I am <span style={{color:'blue'}}>Arun Pandian</span> from <span style={{color:'blue'}}>Tamilnadu</span></section>
              <section>Skilled MERN Stack Developer</section>
              <section>Masters in Industrial Engineering</section>
              <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
              <p>My field of Interest's are building new Web Technologies and Products</p>
              <section>A passionate Full Stack <span style={{color:'blue'}}>Web</span> Developer 🚀</section>
              <section>I have an experience of building applications with</section>
              <section><span style={{color:'blue'}}>JavaScript, Reactjs, Nodejs, Mongodb</span> </section>
          </div>

        </div>
        <div className='about-bottom'>

        </div>
    </div>
  )
}

export default About2