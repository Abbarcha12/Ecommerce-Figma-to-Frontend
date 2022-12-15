import React from "react";
import { VisitShopCard } from "./VisitShopCard";
import "./VisitShopCard.css";
import { Grid, Typography } from "@mui/material"
// import images

import image1 from "../../assets/images/visit-girl.png"
import image2 from "../../assets/images/images2.png";
import image3 from "../../assets/images/images3.png";
import "./VisitShopCard.css"
export const VisitShop = () => {
 return (
  <>

   <Grid container spacing={5}

    alignItems="center"
    justifyContent="center" >
    <Grid item lg={11} sx={{ mt: 10 }} >   <Typography variant="h5" >VISIT SHOP</Typography></Grid>
    <Grid container

     alignItems="center"
     justifyContent="center" lg={11} spacing={5} sx={{ ml: 1, mt: 2 }}>
     <Grid item lg={4} md={4} xs={11} >
      <VisitShopCard img={image1} button="women's" />
     </Grid>
     <Grid item lg={4} md={4} xs={11} >
      <VisitShopCard img={image2} button='Accessories' />
     </Grid>
     <Grid item lg={4} md={4} xs={11}>
      <VisitShopCard img={image3} button="men's" />
     </Grid>
    </Grid>
   </Grid>
  </>
 );
};