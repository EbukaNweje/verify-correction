import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mobile = () => {
  const Nav = useNavigate()
  return (
    <div className='Mymobile'>
         <ul>
                <li onClick={()=> Nav('/')}>Home</li>
                <li onClick={()=> Nav('#Works')}>How It Works</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Get Started</li>
        </ul>
    </div>
  )
}

export default Mobile