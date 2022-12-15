import React from "react";
import "./Contact.css";

const ContactInfo = () => {
 return (
  <>
   <div className="contactinfo-backImage img-fluid"></div>
   <div className="container">
    <div className="row info-alll">
     <div className="col-md-6 mt-5">
      <h2 className="info-head">MY CONTACT INFO</h2>
      <div className="form-info mt-4">
       <form id="first_name mt-5 ">
        <div class="form-group">
         <label>First Name</label>
         <input type="text" class="form-control input-lg" />
        </div>
        <div class="form-group mt-5">
         <label>Last Name</label>
         <input type="text" class="form-control input-lg" />
        </div>
        <div class="form-group mt-5">
         <label>Email Adress</label>
         <input type="text" class="form-control input-lg" />
        </div>
       </form>
      </div>
     </div>

     <div className="col-md-6 ">
      <div className="form-info-secound  ">
       <div className="form-input">
        <form id="first_name mt-5 ">
         <div class="form-group mt-5 mb-5">
          <label>First Name</label>
          <input type="text" class="form-control input-lg" />
         </div>
         <div class="form-group mt-5">
          <label>Last Name</label>
          <input type="text" class="form-control input-lg" />
         </div>
         <div class="form-group mt-5">
          <label>Email Adress</label>
          <input type="text" class="form-control input-lg" />
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="container">
    <div className="row">
     <div className="col-md-12 mb-5 mt-5">
      <button className="info-send">SEND</button>
     </div>
    </div>
   </div>
  </>
 );
};

export default ContactInfo;