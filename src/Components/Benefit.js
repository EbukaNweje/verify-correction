import React from 'react'
import "../Css/Style.css"
import "../Css/Mobile.css"
import Img1 from "../Assets/image/img2.webp"

const Benefit = () => {
  return (
    <div className='GrowYour'>
    <div className='GrowYourHead2'>
        <span>Uncategorized</span>
            <h1>
            What-are-the-benefits-for-getting-verified-on-Instagram?
            </h1>
    </div>
    <div className='BigBann2'>
        <div className='BigBannImage'>
            <img src={Img1} alt="BigImage"/>
        </div>
    </div>
    <div className='GrowMainText'>
        {/* <h6>Why do people prefer Instagram?</h6> */}
        <p>The Instagram blue badge, has a great power and there surely are lots of benefits why people are killing themselves to get verified on Instagram. To some people getting the blue badge is just like a dream and they are trying their best best to achieve that dream.</p>
    </div>
    <div className='GrowMainText'>
        {/* <h6>Below, are the main benefits of getting verified on Instagram:</h6> */}
        <p>1. Your account is more recognizable, and it’s easier to get peoples attention when they see the blue tick</p>
        <p>2. Your account will have more trust from other people since verified accounts are pretty rare</p>
        <p>3. If you are under 10k followers you will still be able to use swipe up feature in stories</p>
        <p>4. Verified accounts usually get early access to new Instagram features</p>
        <p>5. Since your account stands out more, you will get better engagement and with it more followers</p>
        <p>6. Your account won’t have any action limits (or if it does it will be very high) let me explain, you may experience action block if you ever did some actions (like, comment, follow) multiple times in a short period with verified account, your limit to do these actions is going to be much higher and you probably won’t experience action block ever</p>
    </div>
    {/* <div className='GrowMainText'>
        <h6>Instagram verification process:</h6>
        <p>To verify an Instagram account, it should be public mode. Then only the account will be visible to all and easily identified. Then the most important thing is, the content posted on the account needs to be unique and free from copying. It should not be based on other contents or fake. The information should be true and useful to other users. There should be a minimum of 1,500 followers then only the account can be verified. 

        Anyone can get verified on an Instagram account. On the account setting, one can find the verification account and there they need to send a request for verification. Users need to submit their government approved id to verify an individual account and for the organization, they need to submit a company registered license. Based on it, within 3 to 5 days the account will be verified. It is free of cost and no need to pay a penny.  </p>
    </div> */}
</div>
  )
}

export default Benefit