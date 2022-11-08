import React from 'react'
// import '../css/Expert.css'
import Logo from '../Assets/workk.PNG'
import {MdKeyboardArrowRight} from "react-icons/md"

const Expert = () => {
  return (
    <div className='Expert_container'>
        <div className="left_Div">
            <h1>Let's Make Things Happen</h1>
            <h2>
                Please fill out the form and we’ll
                 email you with all the details
                 alongside answer any questions you may have.
            </h2>

            <h4>
            “I had around 15,000 followers a couple of
             years ago and I found ‘Get Insta Verified’. 
             I spoke to Larry and he helped me through the
              process to having my account verified. ”
            </h4>
            <h4>Mark Segbers</h4>
            <p>@x_marks_thaspot</p>
        </div>
        <div className="right_Div">
            <div className="Img_div">
                <img src={Logo} alt="" />
            </div>
            <h2>Larry Rohan</h2>
            <h4>WhatsApp: +1 (754) 250‑3645</h4>
            <p>Social Media Expert</p>
            <div className="email_div">
                <h4>info@getverifiedme.org</h4>       
            </div>
            <ul className='mylist'>
                <li><span className='CoveM'><MdKeyboardArrowRight/></span>24/7 Customer Support</li>
                <li><span className='CoveM'><MdKeyboardArrowRight/></span>Highest Success Rate</li>
                <li><span className='CoveM'><MdKeyboardArrowRight/></span> Let us verify your page like we  have <br/> with over 500+ clients</li>
            </ul>
        </div>
    </div>
  )
}

export default Expert