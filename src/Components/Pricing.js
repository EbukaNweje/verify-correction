import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import '../css/Price.css'
const Pricing = () => {
    const Nav = useNavigate()
    const [rem, setRem] = useState(true)
let ArryData = [
    {
        id: "1",
        name: "Standard",
        price: 200,
        firstlist: "for any profile",
        secondlist: "Verification submission",
        thirdlist: "case study for instagram",
        fourthlist: "Fast turnaround time (3 to 6 hours)",
        fifthlist: "" 
    },

    {
        id: "2",
        name: "Premium",
        price: 300,
        firstlist: "for any profile",
        secondlist: "Interview Article",
        thirdlist: "2 Press Publications",
        fourthlist: "Case study for Instagram",
        fifthlist: "Fast turnaround time (6 to 24 hours)"
    }
]

  return (
    <div className='main_pricing' id="Pricing">
        <h1>Pricing</h1>
        <span>We offer two options. A full-service
             package that will get you more online
             press and interview articles (a requirement
              for Instagram verification), and a submission-only package for
             those who already have online press and interviews.
             </span>
        <h5>All prices are in USD</h5>
        {
            rem? (
                <article className='green_div'>
                We now have 24/7 order processing for extra fast turnaround times
                <span onClick={()=> {
                    setRem(false)
                }}>x</span>
                </article> 
            ) : null
        }
           
       <div className="card_div">
        {
           ArryData.map((element) => (
           <ul className='second_card' key={element.id} >
           <li className='Card_name'>{element.name}</li>
              <li className='Card_amount'>
                  <p>$</p>
                  <span>{element.price}</span></li>
              <li>{element.firstlist}</li>
              <li>{element.secondlist}</li>
              <li>{element.thirdlist}</li>
              <li>{element.fourthlist}</li>
              <li>{element.fifthlist}</li>
              <li className='buttonPrice'>
                  <span onClick={()=> {
                    let myData = []
                    myData.push(element.name, element.price)
                    // console.log(element)
                    localStorage.setItem("Array", JSON.stringify(myData))
                    Nav('/Payment')}}>Get Started</span>
                  
              </li>
           </ul>
           
           ))
        }
      
       </div>
    </div>
  )
 }

export default Pricing