import React from 'react'

export default function Footer(props) {
    console.log(props)
  return (
    <div>
       <div className='row fixed-bottom'>
                <button className='btn btn-danger col-2' onClick={()=>{props.Reset()}}>Reset</button>
                <button className='bg-dark  text-white text-center col-8'>Total Amout :₹ {props.TotalAmount}</button>
                <button className='btn btn-primary col-2'>PAY NOW</button>
            </div>
    </div>
  )
}
