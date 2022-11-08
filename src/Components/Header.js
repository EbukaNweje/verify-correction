import React, { useState } from 'react'
import "../Css/Style.css"
import "../Css/Mobile.css"
import Logo from "../Assets/oie_transparent.png"
import Mobile from './Mobile'

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='Header'>
        <img src={Logo} alt='Logo'/>
        <nav>
            <ul>
                <li>Home</li>
                <li>How It Works</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Get Started</li>
            </ul>
        </nav>
        {
            toggle ? <div className='MobileBug' onClick={()=> setToggle(false)}>Close</div> 
            : <div className='MobileBug' onClick={()=> setToggle(true)}>Menu</div>
        }
            {
                toggle ? <Mobile/> : null
            }
    </div>
  )
}

export default Header