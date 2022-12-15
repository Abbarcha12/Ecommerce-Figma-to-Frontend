import React from 'react'
import { FeaturedProducts } from '../component/PagesComponents/FeatureProduct'
import { VisitShop } from '../component/PagesComponents/VisitShop'
import AboutCompany from "../component/PagesComponents/AboutCompany"
import "./Home.css"
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';

import Review from '../component/PagesComponents/Reviews'
import { Link } from "react-router-dom"
const Home = () => {
 return (
  <div>
   <Grid container className='main-header'>
    <Grid item lg={7} className='heading-content'>

     <Typography variant='h6'  >SPRING / SUMMER COLLECTION 2022</Typography>
     <Typography variant='h2'  >
      Get up to 30% <br /> Off New Arrivals
     </Typography>
     <Link to="/shop" style={{ textDecoration: "none" }}>  <Button>SHOP NOW</Button></Link>
    </Grid>
   </Grid>
   <VisitShop />
   <FeaturedProducts />
   <AboutCompany />
   <Review />
  </div >
 )
}

export default Home