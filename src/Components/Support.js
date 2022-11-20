import React from 'react'
import Firstpix from '../Assets/Screenshot 2022-10-04 135613.png'
import Secondpix from '../Assets/Screenshot 2022-10-04 161618.png'
import Thirdpix from '../Assets/Screenshot 2022-10-05 033142.png'
import Fourthpix from '../Assets/Screenshot 2022-10-05 035835.png'
import fifth from '../Assets/Screenshot 2022-10-05 033425.png'

const Support = () => {
  return (
    <div className="Support_main">
    <div className="Support_txt">
      <h1>Support</h1>

    </div>
      <div className="Support_both">
       <div className="Support_one">
          <h1>We’re here to help!👋</h1>
          <p>Any questions before you order, or about an existing order? No problem, we are here to help.</p>
          <p>Here’s how you can reach our 24/7 support team</p>
          <ul>
          <li>By emailing hello@getverifiedme.com</li>
          <li>Via live chat (bottom-right corner)</li>
          <li>By entering the contact form</li>
      </ul>
          <p>We’ll be in touch shortly!</p>
       </div>
       <div className="Support_two">
          <div className="Support_innertwo">
              <div className="Support_image">
              <p>Your name </p>
              <img src={Firstpix} alt="a pix"/>
          </div>
          <div className="Supportbtn">
              <input type="text" className="Support_InputCon"/>
          </div>
          </div>
          <div className="Support_innertwo">
              <div className="Support_image">
              <p>Instagram username </p>
              <img src={Firstpix} alt='' />
          </div>
          <div className="Supportbtn">
              <img src={Secondpix} alt=''/>
              <input type="text" placeholder="@yourusername*" className="Support_InputCon"/>
          </div>
          </div>
          <div className="Support_innertwo">
              <div className="Support_image">
              <p>Order ID </p>
              <img src={Thirdpix} alt='' />
          </div>
          <div className="Supportbtn">
              <img src={fifth} alt=''/>
              <input type="text"  placeholder="Not required" className="Support_InputCon"/>
          </div>
          </div>
          <div className="Support_innertwo">
              <div className="Support_image">
              <p>Your message </p>
              <img src={Firstpix} alt='' />
          </div>
          <div className="Supportbtnn">
              <img src={Thirdpix}alt=''/>
             <textarea name="" id="" cols="30" rows="10" className="Support_InputConT"></textarea>
          </div>
          </div>
           <div className="Support_ora">
              <img src={Fourthpix} alt='' />
              <p>Send message</p>
           </div>
      </div>
  </div>
  </div>
  )
}

export default Support