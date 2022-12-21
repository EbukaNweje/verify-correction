import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
const Nav = useNavigate()
  return (
    <div>
        <div className='blogall'>
     <h3>Latest blogposts</h3> 
    <div className='mainblog'>
        <div className='containersblogall'>
            <div className='imageblogall'>
                <div className='ageblogall'></div>
                </div>
            <h3>How to get verified on Instagram in 2022?</h3>
            <div className='line'></div>
            <p onClick={()=> Nav('How-to-get-verified-on-Instagram-in-2022')}>Read More </p>
        </div>
        <div className='containersblogall'>
        <div className='imagetwo2blogall'>
                <div className='ageblogall'></div>
         </div>
            <h3>What are the benefits for getting verified on Instagram?</h3>
            <div className='lineblogall'></div>
            <p onClick={()=> Nav('What-are-the-benefits-for-getting-verified-on-Instagram')}>Read More </p>
        </div>
        <div className='containersblogall'>
            <div className='imagethree3blogall'>
                <div className='ageblogall'></div>
            </div>
            <h3>How to Grow your Instagram Engagement in 2022</h3>
            <p>Tags: Get Instagram Verified</p>
            <div className='lineblogall'></div>
            <p onClick={()=> Nav('What-are-the-benefits-for-getting-verified-on-Instagram')}>Read More </p>
        </div>
    </div>
     
    
</div>
    </div>
  )
}

export default Blog