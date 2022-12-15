import React from 'react'
import { Divider, Grid, Card, Paper, Typography } from '@mui/material'
// import Product from '../component/PagesComponents/Product'
import originalJacket from "../assets/images/originalJacket.png";
import { VisitShopCard } from "../component/PagesComponents/VisitShopCard";
import "../component/PagesComponents/VisitShopCard.css";
// import images
import coat from "../assets/images/coat.png";
import badge from "../assets/images/badge.png";
import purse from "../assets/images/purse.png";
import rectangle from "../assets/images/abc.png";
import stars from "../assets/images/star.png";

import darkBikini from "../assets/images/darkBikini.png";
// import originalJacket from "../assets/images/originalJacket.png";
import image1 from "../assets/images/visit-girl.png"
import image2 from "../assets/images/images2.png";
import image3 from "../assets/images/images3.png";

import Title from '../component/PagesComponents/Title'
import "../component/PagesComponents/title.css"
import ShopCard from '../component/PagesComponents/ShopCard';
import { FeaturedProducts } from '../component/PagesComponents/FeatureProduct';
import PaginationButtons from '../component/PagesComponents/pagenation';
const Shop = () => {
   return (
      <>
         <Grid container justifyContent="center" alignItem="center" spacing={2} sx={{ mt: 5 }}>

            <Grid item lg={2} xs={8} className="NewCard" >

               <Typography className="Categories m-4" variant='h5'>
                  Categories
               </Typography>
               <Title title="Accessories" />
               <Title title="SweatShrits" />
               <Title title="Coat" />
               <Title title="jeans" />
               <Title title="Shoes" />
               <Title title="Cap" />
               <Title title="T-Shirts" />
               <Title title="Jackets" />
               <Title title="Shades" />
               <Title title="New" />


            </Grid>
            <Grid item lg={8} xs={11}>
               <Grid container spacing={2}>
                  <Grid item lg={4} xs={12} >
                     <ShopCard
                        img1={rectangle}
                        title='Chain bucket bag'
                        img2={stars}
                        price='P40.00'
                     /> </Grid>
                  <Grid item lg={4} xs={12} >
                     <ShopCard
                        img1={rectangle}
                        title='Chain bucket bag'
                        img2={stars}
                        price='P40.00'
                     /> </Grid>
                  <Grid item lg={4} xs={12} >
                     <ShopCard
                        img1={rectangle}
                        title='Chain bucket bag'
                        img2={stars}
                        price='P40.00'
                     /> </Grid>
               </Grid>

               <Grid container spacing={2}>
                  <Grid item lg={4} xs={12} >
                     <ShopCard
                        img1={rectangle}
                        title='Chain bucket bag'
                        img2={stars}
                        price='P40.00'
                     /> </Grid>
                  <Grid item lg={4} xs={12} >
                     <ShopCard
                        img1={rectangle}
                        title='Chain bucket bag'
                        img2={stars}
                        price='P40.00'
                     /> </Grid>
                  <Grid item lg={4} xs={12} >
                     <ShopCard
                        img1={rectangle}
                        title='Chain bucket bag'
                        img2={stars}
                        price='P40.00'
                     /> </Grid>
               </Grid>

            </Grid>


         </Grid >
         <div className="container">
            <div className='row mt-4 text d-flex justify-content-center' >
               <div className="col-lg-2">
                  <PaginationButtons />
               </div>
            </div>


         </div>
         <Grid container >
            <FeaturedProducts />

         </Grid>

         <Grid container spacing={5}

            alignItems="center"
            justifyContent="center" >
            <Grid item lg={11} sx={{ mt: 10 }} >   <Typography variant="h5" >NECKLAC PRODUCT ‘S</Typography></Grid>
            <Grid container

               alignItems="center"
               justifyContent="center" lg={11} spacing={5} sx={{ ml: 1, mt: 2 }}>
               <Grid item lg={4} md={4} xs={11} >
                  <VisitShopCard img={image1} button=" EXPENSIIVE" />
               </Grid>
               <Grid item lg={4} md={4} xs={11} >
                  <VisitShopCard img={image2} button='NEW ARRIVALS' />
               </Grid>
               <Grid item lg={4} md={4} xs={11}>
                  <VisitShopCard img={image3} button="BEST " />
               </Grid>
            </Grid>
         </Grid>
         <Grid container
            alignItems="center"
            justifyContent="center"
         >
            <Grid item lg={11} sx={{ mt: 10 }} >   <Typography variant="h5" >Get 20 % off</Typography></Grid>
            {/* <Grid container alignItems="center" spacing={5} sx={{ mt: 2, mr: 3 }}
               justifyContent="center" className='nude'>
               <Grid item >
                  <FeatureProductsCard
                     img1={coat}
                     img2={badge}
                     title='#1 New Release'
                     name='coat'
                     discount='p50.00'
                     price='P40.00'
                  />
               </Grid>
               <Grid item >
                  <FeatureProductsCard
                     img1={purse}
                     title='Top Brand'
                     name='coat'
                     price='P40.00'
                  />
               </Grid>
               <Grid item >
                  <FeatureProductsCard
                     img1={rectangle}
                     img2={badge}
                     title='Top Brand'
                     name='coat'
                     discount='p50.00'
                     price='P40.00'
                  />
               </Grid>
               <Grid item >
                  <FeatureProductsCard
                     img1={darkBikini}
                     title='Top Brand'
                     name='coat'
                     price='P40.00'
                  />
               </Grid>
               <Grid item>
                  <FeatureProductsCard
                     img1={originalJacket}
                     img2={badge}
                     title='New'
                     name='coat'
                     discount='p50.00'
                     price='P40.00'
                  />
               </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={5} sx={{ mt: 2, mr: 3 }}
               justifyContent="center" className='nude'>
               <Grid item >
                  <FeatureProductsCard
                     img1={coat}
                     img2={badge}
                     title='#1 New Release'
                     name='coat'
                     discount='p50.00'
                     price='P40.00'
                  />
               </Grid>
               <Grid item >
                  <FeatureProductsCard
                     img1={purse}
                     title='Top Brand'
                     name='coat'
                     price='P40.00'
                  />
               </Grid>
               <Grid item >
                  <FeatureProductsCard
                     img1={rectangle}
                     img2={badge}
                     title='Top Brand'
                     name='coat'
                     discount='p50.00'
                     price='P40.00'
                  />
               </Grid>
               <Grid item >
                  <FeatureProductsCard
                     img1={darkBikini}
                     title='Top Brand'
                     name='coat'
                     price='P40.00'
                  />
               </Grid>
               <Grid item>
                  <FeatureProductsCard
                     img1={originalJacket}
                     img2={badge}
                     title='New'
                     name='coat'
                     discount='p50.00'
                     price='P40.00'
                  />
               </Grid>
            </Grid> */}
            <Grid sx={{ mt: 15 }}></Grid>

         </Grid>
      </>




   )
}

export default Shop