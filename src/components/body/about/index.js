import React from 'react'
import Typewriter from './Typewriter'
import "./about.css"
import g from "../../../assets/resume (2).png"
function About() {
  return (
    <div className='about'>
        <div className='about-top'>
          <div className='about-info'>
            Hi There 👋,
            <br/><span>I'M  </span><span className='info-name'>Arun Pandian</span>.
            <br/>
            <div style={{color: 'blue', marginTop:"10px", fontFamily:"Work Sans"}}>
            <Typewriter
            strings={[
              'MERN Stack Web Developer',
              'Continuous Learner',
            ]}
          /></div>
        
          </div>
          <div className='about-photo'>
            <img className='picture' src={require("../../../assets/coding.png")} alt="coder_image"/>
          </div>

        </div>
        <div className='about-bottom'>

       
        <div className="resume" style={{textAlign: 'center', fontSize: '25px', color:"blue"}}>
          Resume
        </div>
        <div className='social-contact'>
        <a href="https://drive.google.com/file/d/156c_uJj1OMqbptdJUKKGLtY1_5ed52J1/view?usp=sharing" target='_blank' rel="noreferrer">
                    <div className='social-icon-div'>
                        <img src={g} className="social-icon" alt="resume_icons"/>
                    </div>
                </a>
        </div>
        </div>
    </div>
  )
}

export default About
