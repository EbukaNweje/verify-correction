import React, { useState } from 'react'
import Logo from "../Assets/oie_transparent.png"
// import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Mobile from './Mobile'
// import { useNavigate } from 'react-router-dom'
const Header = () => {
    // const Nav = useNavigate()
    const [toggle, setToggle] = useState(false)

  return (
    
    <div className='Header'>
        <img src={Logo} alt="my logo" />
        <ul className='header_nav'>
            <li>Home</li>
            <li>How It Works</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Get Started</li>
        </ul>
        <div className='menu' onClick={()=>setToggle(!toggle)}>Menu</div>
        {
            toggle? <Mobile/> : null
        }
    </div>
  )     
}

export default Header