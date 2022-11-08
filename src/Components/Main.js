import React from 'react'
import About from './About'
import Blog from './Blog'
import Expert from './Expert'
import Faq from './Faq'
import Header from './Header'
import Home from './Home'
import HowItWorks from './HowItworks'
import Pricing from './Pricing'

const Main = () => {
  return (
    <div>
         <Header/>
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