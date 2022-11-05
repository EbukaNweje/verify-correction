import React, { useState } from 'react'
import Logo from "../Assets/oie_transparent.png"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Mobile from './Mobile'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const Nav = useNavigate()
    const [toggle, setToggle] = useState(false)
  return (
    
    <div className='Header'>
         <img src={Logo} alt="Logo" /> 

         <nav className='HeaderNav'>
            <ul>
                <li onClick={()=> Nav('/')}>Home</li>
                <li>How It Works</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Get Started</li>
            </ul>
        </nav> 
         <div className='MyMenu'>
            <span className='Menu'>Menu</span>
            {
                toggle?  <AiOutlineClose className='Icons' onClick={()=> setToggle(false)}/> : <AiOutlineMenu className='Icons' onClick={()=> setToggle(true)}/>
            }
        </div> 
         {
            toggle ? 
            <div className='Mobile'>
            <Mobile/>
            </div> 
        : null
        } 
    </div>
  )
}

export default Header