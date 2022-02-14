import React from 'react'
import SocialContact from "../../common/social-contact/index"
import "./about.css"
function About() {
  return (
    <div className='about'>
        <div className='about-top'>
          <div className='about-info'>
            Hello There 👋, I am 
            <br/><span className='info-name'>Arun Pandian</span>.
            <br/>I Love Building Web Applications
          </div>
          <div className='about-photo'>
            <img className='picture' src={require("../../../assets/coding.png")}/>
          </div>

        </div>
        <div className='about-bottom'>

        </div>
        <SocialContact/>
    </div>
  )
}

export default About