import React from 'react'
import '../css/banner.css'
import bgimagebanner from '../images/bgImage.png'

function Banner() {
  return (
    <div className='banner-container'>
<main> 

    
    <div className='banner-img1'>
      <div className='all-text-box'>
We Offer the Best
<br />  
    Products for your Skin
   
<form>
    <input className='shop' type="submit" value="Shop Now" />
   </form>
   </div>
    </div>
    <div className='section-banner'  >
    <img src={bgimagebanner} alt="" />
    </div>


   
     

</main>



    </div>
    
  )
}

export default Banner
