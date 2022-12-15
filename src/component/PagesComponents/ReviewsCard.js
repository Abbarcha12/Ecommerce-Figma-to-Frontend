
import React from "react";
import "./AboutCompany.css";


const ReviewsCard = (props) => {
 return (
  <>
   <div className='container mb-5'>
    <div className='row '>
     <div className='col-md-12'>
      <div className='card '>
       <img src={props.backimg} alt='' />
       <div className='inner-card  '>
        <img src={props.img} alt='' className='' />
        <h3 className=' inner-card-title mt-5 '>{props.heading}</h3>
        <h6 className='mb-3'>{props.title} </h6>
        <p>{props.desc}</p>
        <div className='stars mb-1'>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default ReviewsCard;