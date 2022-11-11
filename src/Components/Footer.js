import React from 'react'
// import '../css/Footer.css'
import Logo1 from "../Assets/oie_transparent.png"
import Logostar from '../Assets/image copy/stars.png'
import Logo2 from '../Assets/cash app.png'
import Logo3 from '../Assets/zelle.png'
import Logo4 from '../Assets/bitcoin.png'


const Footer = () => {
  return (
    <div>
         <div className='mainFooter'>
        <div className='submain'>
        <div className='header'>
            <div className='left'>
                <div className='image'><img src={Logo1} alt='nice pix' className='LogoImg'/></div>
                <div className='lefttext'>
                    We help clients get Instagram verified. We have a success rate of 95% and can get you verified on Instagram today.
                </div>
            </div>
            <div className='right'>
                <ul className='shedolist'>
                    <li className='same'><h6>Sitemap</h6></li>
                    <li className='home'>Home</li>
                    <li>Blog</li>
                    <li>Support</li>
                </ul>
                <ul className='shedolist'>
                    <li className='same'><h6>Legal</h6></li>
                    <li>Terms</li>
                    <li>Refund</li>
                    <li>Privacy</li>
                </ul>
                <ul className='shedolist'>
                    <li className="same"><h6>Other service</h6></li>
                    <li className="lastli">Buy active Instagram followers.</li>
                </ul>
            </div>
        </div>
        <div className="footer">
            <div className="row1">© 2022Social Grow LLC - Made with ❤️ in California</div>
            <div className="row2">
                <div className="rate" ><img src={Logostar} alt="what" className="star"/>4.5/5</div>
                <div className="pictextIn"><p className="mail">info@getverifiedme.org</p>
                <div className='Footer_img'>
                <img src={Logo2} alt='my pix'/>
                    <img src={Logo3} alt='my pix'/>
                    <img src={Logo4} alt='my pix'/>  
                </div>
                </div>

            </div>
            <div className="row3">
                GetInstaVerified is rated <span>“Excellent”</span> by 58 reviewers.
                <div className="allfoto ">
                    <img src={Logo2} alt='my pix'/>
                    <img src={Logo3} alt='my pix'/>
                    <img src={Logo4} alt='my pix'/>
                </div>
            </div>
        </div>

    </div>
</div>
    </div>
  ) 
}

export default Footer