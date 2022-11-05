import React from 'react'
import Header from '../Components/Header'
import "../Css/Style.css"
import "../Css/Mobile.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Payment from '../components/Payment'
// import Main from '../components/Main'
// import Totop from "../components/Totop"

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        {/* <Totop/> */}
        <Header/>
          <Routes>
            {/* <Route path='/' element={<Main/>}/> */}
            {/* <Route path='/Payment' element={<Payment/>} /> */}
          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Index