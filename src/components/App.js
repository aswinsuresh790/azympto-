
import '../App.css';
import Navbar from './Navbar';
import Banner2 from './Banner';
import Products from './Products';
import logo from  '../images/Logo1.png';
import  Aftersun from  '../images/After-sun.png';

import  Mask from '../images/Protection.png'
import  EyeCare from '../images/Eye-care.png'
import  Nightcare from  '../images/Night-care.png'
import    Protection from '../images/Protection.png'
import   Natural from '../images/Natural.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Newarrival from './Newarrival';
import Why from './Why'
import Footer from './Footer';
import productimg1 from "../images/New arrivals/Image.png";
import productimg2 from "../images/New arrivals/Image2.png";
import productimg3 from "../images/New arrivals/Image3.png"
import productimg4 from "../images/New arrivals/Product.png";
import productimg5 from "../images/New arrivals/Product1.png"
import productimg6 from "../images/New arrivals/ProductImage.png"

function App() {
  const Product=[
    {text:"On Sale",
      img:Aftersun
    },
    {
        img:Aftersun,
text:"Features",
    }
    ,
    {
        img:Mask,
        text:"Mask"
    },
    {
        img:EyeCare,
        text:"EyeCare",
    },
    {
        img:Natural,
        text:'Natural'

    },
    {
        img:Nightcare,
        text:"Night Care" 

    },
    {
        img:Protection,
        text:"Protection"

    }
]
const ProductList=[{
  product_name:"Sun Cream", 
  background:"rgba(41, 117, 255, 0.1)",
  color:"#2975FF",
  prevPrice:"$30",
  price:"$20",
  type:"SUN CARE",
  img:productimg1

},{
  product_name:"Night Eye Cream", 
  background:"rgba(255, 102, 160, 0.1)",
  color:"#FF66A0",
  prevPrice:"$100",
  price:"$50",
  type:"EYE CARE",
  discount:"50% OFF",
  img:productimg2

},
{
  product_name:"Acne Skin Gel", 
  background:"rgba(0, 204, 150, 0.1)",
  color:"#00CC96",
  price:"$25",
  type:"TREATMENTS",
  img:productimg3
},
{
  product_name:"Dry Skin Rescue", 
  background:"rgba(41, 117, 255, 0.1)",
  color:"#2975FF",
  price:"$59",
  type:"MOISTURIZERS",
  img:productimg4
}
,
{
  product_name:"Body Protection", 
  background:"rgba(255, 102, 160, 0.1)",
  color:"#FF66A0",
  prevPrice:"$22",
  price:"$32",
  type:"TREATMENTS",
  img:productimg5

},
{
  product_name:"All In One Gel", 
  background:"rgba(41, 117, 255, 0.1)",
  color:"#00CC96", 
  price:"$79",
  type:"FEATURED",
  discount:"30% OFF",
  img:productimg4

},
{
  product_name:"Deep Treatment", 
  background:"rgba(41, 117, 255, 0.1)",
  color:"#2975FF",
  prevPrice:"$22",
  price:"$17",
  type:"ON SALE",
  img:productimg5

 
  

}
,
{
  product_name:"Morning Shine",
  background:"rgba(41, 117, 255, 0.1)",
  color:"#2975FF",
  price:"$14",
  type:"NIGHT CARE",
  img:productimg6
}]
  



  return (
    <div className="App">
      <Navbar/>
     <div className='banner-main'>
      <Banner2/>
      </div>
    
      <div className='container'><h1>Browse by Category
    
    
    </h1></div>
      <div className='products'>
      {Product.map((obj,id)=>{
        console.log(obj)
        return(<Products key={`obj.${id}`} text={obj.text} image={obj.img} />)

      })}
      </div>
      <div className='container'><h1>New Arrivals
    
    
    </h1></div>
<div className='New'>



{ProductList.map((obj,id)=>{
  console.log(obj)
  return(<Newarrival discount={obj.discount} proimg={obj.img}  text={obj.product_name}  background={obj.background} price={obj.price}  color={obj.color} productType={obj.type} preprice={obj.prevPrice}/>)
})}

</div>
<div className='viewall'>
< input type="submit" value="View All"></input> 

</div>
<div className='whySection'>
<div className='container WhyPeople '>
  <h1><center>Why People Choose Us</center></h1>
<Why/>
</div>

      </div>
      <div className="footer-section">
<Footer  logo={logo}/>
      </div>
      </div>
      
  );
}

export default App;
