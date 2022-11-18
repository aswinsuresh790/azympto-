import React from 'react'
import {BsBox }from 'react-icons/bs'
import '../css/why.css'

function Why() {
  return (
    <div className='why-card'>
       <div className="why-cards">
    <div className="why-card-body">
    <center className="symbols-box" ><BsBox/></center>
      <p className="card-text-why"> Easy Returns</p>
      <p className="card-text2"><medium class="text-muted">Our return policy is simple and that is why customers love our shop</medium></p>
    </div>
  </div>

  <div className="why-cards">
    <div className="why-card-body">
    <center className="symbols-box" ><BsBox/></center>
      <p className="card-text-why"> Customer service</p>
      <p className="card-text2"><medium class="text-muted">We offer amazing customer service no matter what happens.</medium></p>
    </div>
  </div>

  <div className="why-cards">
    <div className="why-card-body">
    <center className="symbols-box" ><BsBox/></center>
      <p className="card-text-why">High Quality</p>
      <p className="card-text2 color-black"><medium className="text-muted">All of our products go through very strict inspection before we dispatch them.</medium></p>
    </div>
  </div>


</div>
      
    
  )
}

export default Why
