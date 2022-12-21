import React from 'react'
import OneImg from '../Assets/pic1.webp'
import TwoImg from '../Assets/icon1.png'
import ThreeImg from '../Assets/pic2.webp'
import Fourmg from '../Assets/icon2.png'
import FiveImg from '../Assets/pic3.webp'
import SixImg from '../Assets/icon 3.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'
// import { useNavigate } from 'react-router-dom'

const HowItWork = () => {
    // const Nav = useNavigate()
  return (
    <div className='main' id="Works">
        
        <div className='container'>
           
            <div className='con'>
                 <div className='imageImg'>
                    <img src={OneImg} alt='OneImg'/> 
                 </div>
                 <div className='txt'>
                    <div className='icon'>
                          <img src={TwoImg} alt='TwoImg'/>
                            <h3>Step 1</h3>
                </div>
                <h1>Check your eligibility</h1>
                <p> – A minimum of 500 followers.</p>

                    <p> – A public account, with a profile picture.</p>

                   <p> – A minimum of 6 posts with a good level of engagement.</p>
                   <Link to='#Pricing' className='BtnPricing'>
                   <div className='ButtonG'>GET STARTED TODAY <AiOutlineArrowDown/></div>
                   </Link>
            </div>
        </div>
        </div>
        <div className='container'>
           
            <div className='cont'>
            <div className='imager'><img src={ThreeImg} alt='ThreeImg'/></div>
            <div className='text'>
                <div className='iconer'>
                    <img src={Fourmg} alt='Favour'/>
                    <h3>Step 2</h3>
                </div>
                <h1>We will write PR articles about you</h1>
                <p> 
                    We will start working on your articles which will be published 
                    on two of our high quality personal blogs which will also be listed on Google.
                </p>
                
            </div>
        </div>
        </div>
        <div className='container'>
          
            <div className='con'>
            <div className='imageImg'><img src={FiveImg} alt='FiveImg'/></div>
            <div className='txt'>
                <div className='icon'>
                    <img src={SixImg} alt='SixImg'/>
                    <h3>Step 3</h3>
                </div>
                <h1>We submit your account</h1>
                <p> 
                    We will submit your request for verification through the Facebook Media Partner 
                    Panel (the only legit way to submit these kind of requests with the highest success rate).
                </p>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default HowItWork