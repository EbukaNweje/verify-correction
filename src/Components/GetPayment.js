import React, { useEffect, useState } from 'react'
import Axios from "axios"

const GetPayment = () => {
  const [backenddata, setBackenddata] = useState([{}])
  
  useEffect(()=>{
    Axios.get("https://getinstaverifiedbackend-production-44c3.up.railway.app/api/v1/getverify").then(
      res => setBackenddata(res.data.data.GetAllUser)
      )
  },[])

  console.log(backenddata)

  const deleteHandler = async (_id) => {
    console.log(_id)
    try{
      await Axios.delete(`https://getinstaverifiedbackend-production-44c3.up.railway.app/api/v1/getverify/${_id}`);
      window.location.reload()
    }catch(error){
      console.log(error.message)
    }
   
  };

  // console.log(backenddata)
    // const url = "http://localhost:1000/api/v1/getverify"
    // const url = "127.0.0.1:1000/api/v1/getverify"
    // fetch(url).then(res => res.json()).then(data => console.log(data))
  return (
    <div className="GetPay">
        <div className='GetPayBody'>
          {
            backenddata.map((props)=>(
              <div key={props._id}>
              <ul>
                <li>First Name: {props.fristName}</li>
                <li>Last Name: {props.lastName}</li>
                <li>Username: {props.userName}</li>
                <li>Email: {props.email}</li>
                <li>Phone Number: {props.phoneNumber}</li>
                <li>Address: {props.address}</li>
                <li>Town/City Name: {props.townCity}</li>
                <li>Post Code: {props.postCode}</li>
                <li>Country: {props.country}</li>
                <li>State: {props.state}</li>
                <li>Order Summary: {props.orderSummary}</li>
                <li>Amount: {props.amount}</li>
                <button className="BtnDelete" onClick={(_id)=> deleteHandler(props._id)}>Delete User</button>
              </ul>
          </div>
            ))
          }         
        </div>
    </div>
  )
}

export default GetPayment