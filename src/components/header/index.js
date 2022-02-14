import React, {useState} from 'react';
import "./header.css";
import Web from './web/index';
import {MdViewList} from "react-icons/md";
import Mobile from "./mobile/index";



function Header() {
 

  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='header'>
      <div className='logo'>
        Arun Pandian
      </div>
      <div className='menu'>
        <div className='web-menu'>
          <Web/>
        </div>
        <div className='mobile-menu'>
          <div >
        <MdViewList className='menu-icon' onClick={()=>setIsOpen(!isOpen)}/>
        </div>
        {isOpen? <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>:<></>}
        </div>
       
      </div>
    </div>
  )
}

export default Header