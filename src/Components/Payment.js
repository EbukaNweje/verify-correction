import React, { useState } from 'react'
import Logo from "../Assets/oie_transparent.png"
import Img2 from '../Assets/imagecopy2/batch.png'
import Img3 from '../Assets/imagecopy2/growth.png'
// import Img4 from '../Assets/image copy 2/visa.png'
import Img5 from '../Assets/imagecopy2/verification.png'
import Img6 from '../Assets/imagecopy2/shield.png'
import Img7 from '../Assets/imagecopy2/lock.png'
import Img8 from '../Assets/imagecopy2/igpic.png'
import Pop from './Pop'
import Axios from "axios"

const Payment = () => {
    let Data = JSON.parse(localStorage.getItem("Array"))
console.log(Data)

const [pack, setPack] = useState(false)
const [agree, setAgree] = useState(false)
const [agree1, setAgree1] = useState(false)
const [msg1, setMsg1] = useState()
const [msg2, setMsg2] = useState()
const [msg3, setMsg3] = useState()
const [msg4, setMsg4] = useState()
const [msg5, setMsg5] = useState()
const [msg6, setMsg6] = useState()
const [msg7, setMsg7] = useState()
const [msg8, setMsg8] = useState()
const [msg9, setMsg9] = useState()
const [msg0, setMsg0] = useState()
const [show, setShow] = useState()
const [show1, setShow1] = useState(false)
const [growth, setGrowth] = useState(0)
// const [collect, setCollect] = useState({})

const price = Data[1]
const totalP = price + growth
console.log(totalP)

const myfunction = ()=> {
    if(!msg0 || !msg1 || !msg2 || !msg3 || !msg4 || !msg5 || !msg6 || !msg7 || !msg8 || !msg9) {
        setShow1(true)
        setShow(false)
        // alert("khvid")
       }
       else if(agree && agree1) {
        let collect = {
            userName: msg0,
            fristName: msg4,
            lastName: msg5,
            email: msg3,
            phoneNumber: msg6,
            address: msg1,
            townCity: msg7,
            postCode: msg2,
            country: msg8,
            state: msg9,
            amount: totalP
        }

        // const config = {
        //     headers: {
        //       "content-type": "multipart/formData"
        //     }
        //   }

        Axios.post("https://getinstaverifiedbackend-production-44c3.up.railway.app/api/v1/getverify",collect).then(res=>{ console.log(res)})

        setShow(true)
        console.log(collect)
    }

}

  return (
    <div>
        <div className='Payment_main'>
        <div className='Payment_cont'>
            <div className='Payment_header'>
                <div className='PayImg'>
                    <img src={Logo} alt='a pix' />
                </div>
                <div className='PaymentText'>
                    <article className='Pay_art'>
                        <img src={Img8} alt='a pix' />
                    </article>
                    <article className='Paytext'>
                        <h1>Are you ready to get Verified on Instagram?</h1>
                        <p>Being Verified has huge benefits. You will gain followers faster than ever before, have more authority and social credibility, and much more. Get started today.</p>
                    </article>
                </div>
            </div>
            </div>
            <div className='formwhite'>
            <div className='Payment_form'>
                <div className='formheader'>
                    <h4>24/7 Order Handling</h4>
                    <p className='formparagram'>After placing your order, our team will get started directly.</p>
                    <div className='Payment_line'></div>
                </div>
                <div className='contact'>
                    <div className='formcont'>
                    <h4>CONTACT INFORMATION </h4>
                    <form action='' className='formtag'>
                        {
                            show1?<div className='Error_prevent'>Please fill the form completely! </div> : null
                        }
                    <div><input type='text' name='' value={msg0} onChange={(e)=> setMsg0(e.target.value)} id='' className='inputcont' placeholder='instagram Username'/></div>
                    <div><input type='email' name='' value={msg3} onChange={(e)=> setMsg3(e.target.value)} id='' className='inputcont' placeholder='Email'/></div>
                    <div><input type='text' name='' value={msg4} onChange={(e)=> setMsg4(e.target.value)} id='' className='inputcont' placeholder='First Name'/></div>
                    <div><input type='text' name='' value={msg5} onChange={(e)=> setMsg5(e.target.value)} id='' className='inputcont' placeholder='Second Name'/></div>
                    <div><input type='text' value={msg6} onChange={(e)=> setMsg6(e.target.value)} className='inputcont' placeholder='Phone '/></div>
                    <div className='Payment_two'><input type='text'value={msg1} onChange={(e)=> setMsg1(e.target.value)} className='inputcont Inputspace' placeholder='street address'/>
                    <input type='text' name=''value={msg7} onChange={(e)=> setMsg7(e.target.value)} id='' placeholder='Town/city' className='inputcont Inputspace'/></div>
                    <div className='three'><input type='text' value={msg2} onChange={(e)=> setMsg2(e.target.value)} className='inputcont Inputspace' placeholder='Postcode'/>
                    <input type='text' name='' value={msg8} onChange={(e)=> setMsg8(e.target.value)} id='' className='inputcont Inputspace' placeholder='country'/>
                    <input type='text' name='' value={msg9} onChange={(e)=> setMsg9(e.target.value)} id='' className='inputcont Inputspace' placeholder='state'/></div>
                </form>
                <div className='summary'>
                    <div className='summaries'>
                    <h4 className='sum'>Order Summary</h4>
                    <input type='text' className='order' placeholder='Order notes(optional)'/>
                    <div className='btn'>Have a coupon? Click here to enter your code</div>
                    <div className='verify'>
                        <div className='verifytext'><img src={Img2} alt=''/>
                        <div className='packagehidden'>Instagram Verification - {Data[0]} package </div>
                    </div>
                        <div>${Data[1]}.00</div>
                    </div>

                </div>
                <div className='subtotal'>
                    <div>subtotal</div>
                    <div>${Data[1]}.00</div>
                </div>
                <div className='total'>
                    <div>total</div>
                    <div>${Data[1]}.00</div>
                </div>

            </div>
            <div className='paymentinfo'>
                <div className='transact'>
                    <h1>Payment Information</h1>
                    <p>All transactions are secure and encrypted. Credit card information is never stored on our servers.</p>
                </div>
                <div className='dash'>
                    <div className='subdash'>
                    <header className='dashheader'>
                        <div className='check'>
                        <input type='checkbox' onChange={()=>{
                            
                            pack?( 
                                setPack(false)): setPack(true)

                                pack? setGrowth(0) :  setGrowth(59)
                            
                        }}/> 
                    <div className='yes'> Yes! Add Instagram Growth Plan to my order</div> </div>
                        <div className='twototal'>
                        <div className='Linethrough'>$249.00</div>
                        <div>$59.00</div> </div>
                </header>
                </div>
                <div className='articles'>
                    <div className='aticlescont'>
                    <div className='growth'> <img src={Img3} alt='' className='growthimg'/></div>
                    <div className='aticlesconttext'>
                        <p>Additional offer:<span>Grow Your Instagram, The Real Way</span>.</p>
                        <p className='pg'>Have our dedicated team of Instagram growth experts grow your profile using organic techniques used by the 1%.</p>
                        <p className='pg'><span>Are you all in on Instagram?</span> This plan is for you. We will accelerate your growth, and you'll get a dedicated Instagram growth team to help you reach your goals.</p>
                        <ul className='unordered'>
                            <li>100% Real, organic growth</li>
                            <li>Gain up to 7,500 followers per month</li>
                            <li>Expert guidance from our dedicated Instagram growth team
                                This professional growth service costs $249 / month.</li>
                                </ul>
                            
                        
                    <p className='pg'><span>However</span>: VerifiedBadge customers get exclusive access to this discounted one-time package offer:</p>
                    
                        <ul className='unordered'>
                            <li>$59 ONE-TIME purchase.</li>
                            This means No subscription. Get 1 month of Expert Instagram Growth. No contract. No hidden fees. No ties.
                        </ul>
                    
                    <p className='pg'>If you like the results, you can choose to change your plan to a subscription after the month is over. </p>
                    <p className='pg'>How will this affect my verification? Having more followers and engagement will significantly increase your chances of becoming verified.</p>
                    <p className='pg'>Is this a subscription? No! You're not tied to anything. It's a one-time purchase of $59; you'll get expert Instagram growth for an entire month.</p>
                    </div>
                </div>
                </div>
                </div>
                <div className='fthidden'>
                    <div className='verifyhidden'>
                        <div className='verifytexthidden'><img src={Img2} alt=''/>
                        <div className='packagehidden'>Instagram Verification - {Data[0]}</div>
                    </div>
                        <div>${Data[1]}.00</div>
                    </div>

                </div>
               {
                pack? (
                    <div className='fthidden'>
                    <div className='verifyhidden'>
                        <div className='verifytexthidden'><img src={Img3} alt=''/>
                        <div className='packagehidden'>Growth Plan</div>
                    </div>
                        <div>$59.00</div>
                    </div>
                </div>
                ) : null
               }
                   <div className='fthidden'> 
                    <div className='subtotalhidden'>
                        <div>subtotal</div>
                        <div>${price+growth}.00</div>
                    </div>
                    <div className='totalhidden'>
                        <div>total</div>
                        <div>${price+growth}.00</div>
                    </div>

                   </div>
                <div className='foot'>
                    <div className='info'>
                        <h2>Payment Information</h2>
                        <p className='all'>All transactions are secure and encrypted.</p>
                    </div>
                    {/* <div className='ft1'>
                        <div className='ftsub'><input type='radio' className='same'/> </div> <div className='pay'> Pay by Card <img src={Img4} alt='' className='same'/> <img src='./image/master.png' alt='' className='same'/> </div>
                    </div> */}
                    {/* <div className='fte'>
                        <div className='cardz'>
                           <div className='card1'>
                             <img src={Img2} alt='' className='logo'/> 
                             <input type='text' className='mast' placeholder='Card number'/></div>
                        <div className='card2'>
                            <input type='text' className='mmm' placeholder='mm/yy'/>
                            <input type='text' className='cvv' placeholder='cvv'/>
                        </div>
                    </div>
                    </div> */}
                   
                    <div className='ft3'>
                    <div className='ftcont'> 
                        <input type='radio' onChange={()=> {
                         !agree? setAgree(true) : setAgree(false)
                        } }/>  <p className='radiopg'>Bitcoin and other cryptocurrencies (15% off)</p>
                    </div>
                </div>
                </div>
                <div className='ft4'>
                    <p className='ft4pg'>
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                    <div className='pg3'>
                        <input type='checkbox'onChange={()=> {
                            !agree1? setAgree1(true) : setAgree1(false)
                        }} />  <p className='agree'>I have read and agree to the website terms and conditions *</p>
                    </div>
                    
                    <div className='ft5'>
                        <button onClick={()=>myfunction()} className='place'>Place Your Order Now</button>
                        <div className='get'>
                            <div className='get1'><img src={Img5} alt=''/>
                            <div className='very'>#1 Verification Service</div>
                        </div>
                            <div className='get2'><img src={Img6} alt=''/>
                            <div className='gen'>Genuine Verification (No tricks or loopholes)</div>
                        </div>
                            <div className='get3'><img src={Img7} alt=''/>
                            <div className='pro'>We Protect Your Privacy</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
                </div>
    
            </div>
            
        </div>
        
        <div>
            {
                show? <Pop/> : null
            }
        </div>
        

        <div className='formfoot'>
            <div className='footpg'>
            <div className='footform'>
                <div className='good '>You're in good hands</div>
                <p className='formfootpg'>Our team of Instagram growth experts have been in the industry for over 5 years. We have successfully verified hundreds of celebrities, athletes, artists, authors, influencers, brands, and many more. We're the go-to source for PR, Instagram Growth and Social Media Verifications.</p>
            </div>
            
        </div>
    </div>
        </div>

<div className='futers'>
    <div className='formfootpou'>
        <div className='rows1'><img src={Logo} alt='' className='formfootpopixcdcd' /></div>
        <div className='rows2'>Privacy Policy | Terms & Conditions</div>
        <div className='Pay_copy'>© Copyright 2022 Get Insta Verified. All rights reserved</div>
    </div>
</div>
</div>
</div>
  )
}

export default Payment