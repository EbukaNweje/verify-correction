import React from 'react'
import "../Css/Style.css"
import "../Css/Mobile.css"
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Main from '../Components/Main'
// import Payment from '../components/Payment'
// import Main from '../components/Main'
// import Totop from "../components/Totop"

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        {/* <Totop/> */}
          {/* <Main/> */}
          <Routes>
            <Route path='/' element={<Main/>}/>
            {/* <Route path='/Payment' element={<Payment/>} /> */}
          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default Index