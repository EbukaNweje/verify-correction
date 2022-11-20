import React from 'react'
import "../Css/Style.css"
import "../Css/Mobile.css"
import Logo from "../Assets/oie_transparent.png"
import { useNavigate } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link'
// import Mobile from './Mobile'
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const Nav = useNavigate()
    // const [toggle, setToggle] = useState(false)
  return (
    <div className='Header'>
        <img src={Logo} alt='Logo'/>
        <nav>
            <ul>
                <li onClick={()=>Nav('/')}>Home</li>
                <li>How It Works</li>
                <li>About</li>
              
                <li>FAQ</li>
                <li onClick={()=> Nav('Support')}>Support</li>
                <li>Get Started</li>
            </ul>
        </nav>
        {/* {
            toggle ? <div className='MobileBug' onClick={()=> setToggle(false)}>Close <AiOutlineClose className='Menu_icons'/></div> 
            : <div className='MobileBug' onClick={()=> setToggle(true)}>Menu <AiOutlineMenu className='Menu_icons'/></div>
        }
            {
                toggle ? <Mobile/> : null
            } */}
    </div>
  )
}

export default Header