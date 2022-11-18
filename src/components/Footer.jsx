import React from 'react'
import '../css/footer.css'
import {BsInstagram} from "react-icons/bs"
import {FiTwitter,FiFacebook}  from  "react-icons/fi"
function Footer(prop) {
  return (
    <div  className='container fullfooter'>
    <div className='list'>
        <dl>
  <dt><img  className='logo-footer' src={prop.logo} width="100rem"  alt="" /></dt>
  
  <dd>© 2020 - All rights reserved</dd>
  
  <dd className="social-logo"><center className="symbols-box2" ><BsInstagram/></center> &nbsp;<center className="symbols-box2" ><FiTwitter/></center>   &nbsp;<center className="symbols-box2" ><FiFacebook/> </center></dd>
</dl>

      
    </div>
    <div  className='rightlist'><dl>
  <dt>Legal</dt>
  <dd>Terms of Service</dd>
  <dd>Privacy Policy</dd>

</dl>
</div>
<div className='rightlist'>
<dl>
<dt>Company</dt>
  <dd>About</dd>
  <dd>Team</dd>
  <dd>Contact</dd>
  
</dl>

</div>
    </div>
  )
}

export default Footer
