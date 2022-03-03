import React from 'react'
import SocialContact from '../../common/social-contact/index'
import Seperator from '../../common/social-contact/seperator/index'
import "./contact.css"
function Contact() {
  return (
    <div className='contact'>
        <Seperator/>
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
          <div className='contact-left'>
            <p>Want to get in touch? Contact me on any of the platform</p>
            <SocialContact/>
          </div>
          <div className='download'>
            <a download href="https://drive.google.com/file/d/1Islz_-ipIaM81wuEHzwYcD5gozFZfgSl/view?usp=sharing" target="_blank" rel="noreferrer">
              
              View Resume
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact