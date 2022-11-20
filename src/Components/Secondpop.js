import React from 'react'
import { useNavigate } from 'react-router-dom'

const Secondpop = () => {
    const Nav = useNavigate()
  return (
    <div className='PopContainer'>
        <div className='PopCard secondpop'>
           <p>  Successfull! </p>
           <span onClick={()=> Nav('/')} className='PopContactBtn'>Back To Home</span>
        </div>
    </div>
  )
}

export default Secondpop