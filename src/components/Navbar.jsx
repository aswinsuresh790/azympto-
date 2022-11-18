import '../css/navbar.css';

import search from '../images/search.png';
import user from '../images/Icon.png';
import cart from '../images/Vector.png';
import Menu from  '../images/Menu.png';
import Close from '../images/close1.png';
import { useState } from 'react'
import logo from '../images/Logo.png';
import logo2 from '../images/Logo1.png';
function Navbar() {
    const[isMobile ,setIsMobile]=useState(true);
  const[image,setImage]=useState(true)
    return (
    <div className='header-nav'>
        <header>
            <nav  className='navbar'>
           <button onClick={()=>setIsMobile(!isMobile)}><div  className='logobgk' > {isMobile ?  (< img  className="menu-bar" img src={Menu} alt="menu" />):(<img className="" src={Close} alt="Logo"/>)}    </div> </button>
          
           
  <img className="logo2" src={logo2} alt="Logo"/> 
  {image &&<img className="logo" src={logo} alt="Logo"/>}
           
                
                <ul className={isMobile ? "list" : "mob-list"  } >
                    <li className='li'><img src={search} alt="search" /></li>
                    <li className='li'><img src={cart} alt="cart" /><span className='noti'></span></li>
                    <li className='li'><img src={user} alt="user" /></li>
                </ul>
              

            </nav>
            

            
        </header>      
    </div>
  )
}

export default Navbar 
