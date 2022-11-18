import React from 'react'
import '../css/newarrival.css'
import ProductImg1 from '../images/New arrivals/Product.png'


function Newarrival(props) {
  let badgeText
    if (props.discount) {   
        badgeText = `${props.discount}`
    } else if (!props.dicount) {
        badgeText = ""
    }
  return (
    <div  className='product_card'>
    <div className="card2" style={{width:"299.38px",height: "423.86px",border:"transparent" }}>

        <div className="card-img-section" style={{width:"276px",height: "276px",border:"transparent",backgroundColor:"#F6F7FB",position:"relative" }} >
  <img className="card-img-center m-auto pt-3" src={props.proimg}  alt="Card image "/>
  {badgeText &&  <h1> <span class="badge badge-primary">{badgeText}</span> </h1>}

 
  </div>
  <br />
  <div className="card-body2">{props.text}
    
   
    <br/>
    
    <p className="card-text2"><input style={{backgroundColor:`${props.background}` ,color:`${props.color}`, border:"transparent"}} className="product-type" type="submit" value={props.productType}/>  <span className='preprice'>{props.preprice}</span>&nbsp;<span className='price'>{props.price} </span></p>
  </div>
</div>
</div>
  )
}

export default Newarrival
