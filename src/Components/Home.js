import React from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
const Home = () => {
  // const Nav = useNavigate()
  return (
    <div className='HomeContainer'>
        <div className='H1'><h1>Get Verified on Instagram</h1></div>
        <p>
        Let us help you get verified on Instagram. No bots or gimmicks, a 100% human-powered service to help you get a blue tick.
        </p>
        <Link to='#Pricing' className='BtnPricing'>
          <div className='Button'>GET STARTED TODAY <AiOutlineArrowDown className='BtnT'/></div>
          </Link>
    </div>
  )
}

export default Home