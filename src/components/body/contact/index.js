import React from 'react'
import SocialContact from '../../common/social-contact/index'
import Seperator from '../../common/social-contact/seperator/index'
import {  FaDownload } from "react-icons/fa";
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
            <a download href={require("../../../assets/arun pandian resume .docx")}>
              <FaDownload className='download-icon'/>
              Download Resume
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact