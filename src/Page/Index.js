import React from 'react'
import "../Css/Style.css"
import "../Css/Mobile.css"
import { BrowserRouter,  Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Home from '../Components/Home'
import HowItWorks from '../Components/HowItworks'
// import Payment from '../components/Payment'
// import Main from '../components/Main'
// import Totop from "../components/Totop"

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        {/* <Totop/> */}
           <Header/>
           <Home/>
           <HowItWorks/>
          <Routes>
            {/* <Route path='/' element={<Main/>}/> */}
            {/* <Route path='/Payment' element={<Payment/>} /> */}
          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Index