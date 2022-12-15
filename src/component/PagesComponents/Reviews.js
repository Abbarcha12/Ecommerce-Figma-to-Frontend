import React from 'react'
import "./AboutCompany.css";
import img10 from "../../assets/images/10.png";
import img2 from "../../assets/images/3.png";
import img3 from "../../assets/images/4.png";
import ReviewsCard from './ReviewsCard';
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import { Grid } from '@mui/material';
const Review = () => {

 return (
  <>
   <Grid container alineItem="center" justifyContent="center" sx={{ mt: 11 }}>
    <div className='row'>
     <div className='col-md-4'>
      <ReviewsCard
       backimg={img10}
       img={img5}
       heading='Bang Upin'
       title='Pedagang Asongan'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </div>
     <div className='col-md-4'>
      <ReviewsCard
       backimg={img2}
       img={img6}
       heading='Ibuk Sukijan'
       title='Ibu Rumah Tangga'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </div>
     <div className='col-md-4'>
      <ReviewsCard
       backimg={img3}
       img={img7}
       heading='Mpok Ina'
       title='Karyawan Swasta'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </div>
    </div>
   </Grid>
  </>
 )
}

export default Review