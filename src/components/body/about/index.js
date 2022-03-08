import React from 'react'
import Typewriter from './Typewriter'
import SocialContact from "../../common/social-contact/index"
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
              'Continuously Learning',
            ]}
          /></div>
        
          </div>
          <div className='about-photo'>
            <img className='picture' src={require("../../../assets/coding.png")} alt="coder_image"/>
          </div>

        </div>
        <div className='about-bottom'>

        </div>
        <div style={{textAlign: 'center', fontSize: '25px', color:"blue"}}>
          Resume
        </div>
        <div className='social-contact'>
        <a href="https://drive.google.com/file/d/1Islz_-ipIaM81wuEHzwYcD5gozFZfgSl/view?usp=sharing" target='_blank' rel="noreferrer">
                    <div className='social-icon-div'>
                        <img src={g} className="social-icon" alt="resume_icons"/>
                    </div>
                </a>
        </div>
    </div>
  )
}

export default About