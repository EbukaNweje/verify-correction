import React from 'react'
import "../Css/Style.css"
import "../Css/Mobile.css"
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Main from '../Components/Main'
import Payment from '../Components/Payment'
// import Main from '../components/Main'
import Totop from "../Components/Totop"
import Terms from '../Components/Terms'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Privacy from '../Components/Privacy'
import Support from '../Components/Support'

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Totop/>
        <Header/>
          {/* <Main/> */}
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/Payment' element={<Payment/>} />
            <Route path='/Terms&conditions' element={<Terms/>}/>
            <Route path='/Privacy' element={<Privacy/>}/>
            <Route path='/Support' element={<Support/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>


    </div>
  )
}

export default Index