import React from "react";
import "./ReviewPage.css";

import rev1 from "../assets/images/8.png";
import ReviewsCard from "../component/PagesComponents/ReviewsCard";
import img2 from "../assets/images/3.png";
import img3 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img10 from "../assets/images/10.png";





import { Grid, Typography, Box } from "@mui/material";


const ReviewPage = (props) => {
 return (
  <>
   <Grid container alignContent="center" alignItems="center">
    <Grid container alignItems="center"
     justifyContent="center">
     <Grid item lg={4} md={4} xs={11} className='Review-img '>
      <img src={rev1} alt='' className='img-fluid' />
     </Grid>

     <Grid item lg={6} md={6} xs={11} sx={{ mt: 5.2 }} className=' review-shade'>
      <Grid sx={{ ml: 4 }} className='review-text'>
       <Typography variant="h5" className='review-heading' sx={{ mt: 1 }}>Example Name</Typography>
       <Typography variant="h6" className='review-title'> Ibn Rumah Tangga</Typography>
       <Box className='review-stars ' sx={{ mt: 4 }}>
        <Grid className='stars-all'>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
         <i class='fa-solid fa-star'></i>
        </Grid>
        <Typography variant="h6" sx={{ mr: 4 }} className='review-time'>09/02/2022</Typography>
       </Box>
       <Typography variant="h6" className='review-desc'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
        in hendrerit in vulputate velit esse
       </Typography>
       <Grid container className='review-help' sx={{ mt: 5.2 }} >
        <Grid item lg={8} xs={7}>
         <h4 className='review-helpfull'>Was this review helpfull?</h4>
        </Grid>
        <Grid item lg={2} xs={2}  >
         <div className='review-yes ' ><a href=''> YES </a></div>
        </Grid>
        <Grid item lg={2} xs={2}>
         <div className='review-no ' > <a href=''>No</a></div>
        </Grid>
       </Grid>
      </Grid>
     </Grid>
    </Grid>

    <Grid container alignItems="center" justifyContent="center" sx={{ mt: 10 }}>
     <Grid item lg={10}>
      <Typography variant="h5" className='review-testimonial '>Testimonials</Typography>
      <Typography variant="h3" className='test-head '>Our Client Reviews</Typography>
     </Grid>
    </Grid>
    <Grid container alignItems="center" justifyContent="center" sx={{ mt: 10 }}>
     <Grid item >
      <ReviewsCard
       backimg={img10}
       img={img5}
       heading='Bang Upin'
       title='Pedagang Asongan'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </Grid>
     <Grid item >
      <ReviewsCard
       backimg={img2}
       img={img6}
       heading='Ibuk Sukijan'
       title='Ibu Rumah Tangga'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </Grid>
     <Grid item >
      <ReviewsCard
       backimg={img3}
       img={img7}
       heading='Mpok Ina'
       title='Karyawan Swasta'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </Grid>

    </Grid>
    <Grid container alignItems="center" justifyContent="center" sx={{ mt: 10 }}>
     <Grid item >
      <ReviewsCard
       backimg={img10}
       img={img5}
       heading='Bang Upin'
       title='Pedagang Asongan'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </Grid>
     <Grid item >
      <ReviewsCard
       backimg={img2}
       img={img6}
       heading='Ibuk Sukijan'
       title='Ibu Rumah Tangga'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </Grid>
     <Grid item >
      <ReviewsCard
       backimg={img3}
       img={img7}
       heading='Mpok Ina'
       title='Karyawan Swasta'
       desc='Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo'
      />
     </Grid>

    </Grid>

   </Grid>
  </>
 );
};

export default ReviewPage;