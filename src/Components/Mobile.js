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
                <li
                 onClick={()=>{
                  Nav('/')
                  window.location.reload()
                }}
                >How It Works</li>
                <li
                onClick={()=>{
                  Nav('/')
                  window.location.reload()
                }}
                >About</li>
                <li
                onClick={()=>{
                  Nav('/')
                  window.location.reload()
                }}
                >FAQ</li>
                <li
                onClick={()=>{
                  Nav('/')
                  window.location.reload()
                }}
                >Support</li>
                <li
                onClick={()=>{
                  Nav('/')
                  window.location.reload()
                }}
                >Get Started</li>
            </ul>
        </div>
    </div>
  )
}

export default Mobile