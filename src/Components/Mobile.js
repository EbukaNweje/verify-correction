import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mobile = () => {
  const Nav = useNavigate()
  return (
    <div className='MobileMenuDrop'>
        <div className='Nav'>
            <ul>
                <li onClick={()=>{
                  Nav('/')
                  window.location.reload()
                }}>Home</li>
                <li>How It Works</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Get Started</li>
            </ul>
        </div>
    </div>
  )
}

export default Mobile