import React from "react";
import "./AboutCompany.css";
import { Grid, Typography } from "@mui/material"
const Home = () => {
 return (
  <>
   <Grid container sx={{ mt: 8 }} className='  banner-img' spacing={4}>
    <Grid lg={12} className='  banner-row'>
     <Grid container alignItems="center"
      justifyContent="center">
      <Grid item lg={9} className=' img-shadow'>
       <Grid item>
        <Typography variant="h3" className='img-heading mt-5 '>
         <span>More About Our</span> Company
        </Typography>
        <Typography className='img-title' variant="h5" sx={{ mt: 3 }}>
         What Make Us <span>Different</span>
        </Typography>
        <Grid item sx={{ m: 3 }}>
         <Typography variant="p" className='img-description text-light '>
          Lorem ipsum dolor sit amet, consectetuer adipiscing .
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu,  pretium...Lorem ipsum dolor sit
          amet, consectetuer adipiscing . Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis  natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu,
          pretium...
         </Typography>
        </Grid>
       </Grid>
      </Grid>
     </Grid>


    </Grid>

   </Grid>
   <Grid container alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
    <Grid item className='testimonial-title '>
     <Typography variant="h5">
      <span>TESTIMONIALS</span>
     </Typography>
     <Typography variant="h3">Our Client Reviews</Typography>
    </Grid>

   </Grid>

  </>
 );
};

export default Home;