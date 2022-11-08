import React from 'react'
import Logo1 from '../Assets/First.png'
import Logo2 from '../Assets/Second.png'
import Logo3 from '../Assets/Third.png'

const About = () => {
  return (
    <div>
        <div className='Aboutmain'>
    <div className='ccontainer'>
        <div className='cone'>
            <div className='txtone'>
            <h3>We Build Relationships</h3>
            <p>Our relationship with Instagram has never been stronger, 
                we’ve helped over 500 Instagram accounts get verified.</p>
            </div>
            <div className='txtone'>
                <h3>Professional PR articles</h3>
                <p>Our dedicated team of PR experts have written hundreds of 
                    articles to increase social proof and get clients verified.</p>
            </div>
        </div>
        <div className='two'>
            <div className='innertwo'>
            <div><img src={Logo1} alt=''/></div>
            <div className='text'>
            <h4>No Password Needed</h4>
            <p>We don’t need access to your account and don’t need any login information.</p>
        </div>
    </div>
    <div className='innertwo'>
        <div><img src={Logo2} alt=''/></div>
        <div className='text'>
        <h4>High Success Rate</h4>
        <p>Clients that use our method have a 96% higher chance of getting verified.</p>
    </div>
</div>
<div className='innertwo'>
    <div><img src={Logo3} alt=''/></div>
    <div className='text'>
    <h4>Fast Turnaround Time</h4>
    <p>We’ll have everything sorted and ready within 2 to 3 business days.</p>
</div>
</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default About