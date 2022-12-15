import React from 'react'

// import css
import "./Footer.css"

// import MUI Icons
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

function Footer() {
 return (
  <div id='Footer' className='py-5'>
   <div className="container">
    <div className="row">
     <div className="col-lg-4 col-md-12">
      <div className='Footer-logo-container'>
       <a className="Footer-logo text-uppercase" href="#">Company<span>Logo</span></a>
       <p className='mx-5 my-3 Footer-logo-detail'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing.Sint accusamus temporibus voluptas</p>
       <div className='mx-5 mb-4 mt-5 Mail'>
        <MailOutlineRoundedIcon />
        <span>company logo @123</span>
       </div>
       <div className='mx-5 mt-4 mb-5 Phone'>
        <PhoneRoundedIcon />
        <span>+ 12 3456 7890</span>
       </div>
      </div>
     </div>
     <div className="col-lg-8 col-md-12">
      <div className="footer-text">
       <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
         <h3 className="mb-4 mx-4">Services</h3>
         <ul>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
         </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
         <h3 className="mb-4 mx-4">Support</h3>
         <ul>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
         </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
         <h3 className="mb-4 mx-4">Company</h3>
         <ul>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
         </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
         <h3 className="mb-4 mx-4">Legal</h3>
         <ul>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
          <li>lorem ipsum dolar</li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="row">
     <div className="col-md-12">
      <div className='copyRight'>
       <p className="text-center mt-4">company logo /1234567890-=-098765432q1</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Footer