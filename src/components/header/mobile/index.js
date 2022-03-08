import React from 'react'
import { ImMan } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./mobile.css"
import { BsNewspaper } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <AiOutlineCloseCircle/>
      </div>
      <div className='mobile-options'>
      <div className='mobile-option'>
        <a href='#about2'>
          <ImMan className='option-icon'/>About
        </a>
      </div>
      <div className='mobile-option'>
        <a href='#project'>
          <BsNewspaper className='option-icon'/>Projects
        </a>
      </div>
      <div className='mobile-option'>
        <a href='#skills'>
        <FaLaptopCode className="option-icon"/>Skills
        </a>
      </div>
      <div className='mobile-option'>
        <a href='#contact'>
        <FaUserAlt className="option-icon"/>Contact
        </a>
      </div>
      </div>
      </div>
  )
}

export default Mobile