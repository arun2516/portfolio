import React from 'react'
import { ImMan } from "react-icons/im";
import { BsNewspaper } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import './web.css';
function Web() {
  return (
    <div className='web'>
       <div className='web-option'>
        <a href='#about2'>
          <ImMan className='option-icon'/>About
        </a>
      </div>
      <div className='web-option'>
        <a href='#project'>
          <BsNewspaper className='option-icon'/>Projects
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills'>
        <FaLaptopCode className="option-icon"/>Skills
        </a>
      </div>

      <div className='web-option'>
        <a href='#contact'>
        <FaUserAlt className="option-icon"/>Contact
        </a>
      </div>

    </div>
  )
}

export default Web