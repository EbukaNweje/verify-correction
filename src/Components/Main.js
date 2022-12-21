import React from 'react'
import About from './About'
import Blog from './Blog'
import Expert from './Expert'
import Faq from './Faq'
// import Footer from './Footer'
// import Header from './Header'
import Home from './Home'
import HowItWorks from './HowItworks'
import Pricing from './Pricing'
// import Header from "./Header"

const Main = () => {
  return (
    <div className='Big_maincon'>
         {/* <Header/> */}
           <Home/>
           <HowItWorks/>
           <Pricing/>
           <About/>
           <Faq/>
           <Blog/>
           <Expert/>
    </div>
  )
}

export default Main