import React from 'react'
import { Card, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import "./ShopCard.css"
const ShopCard = (props) => {
  return (
    <div className='text-center'>
      <Link to="/ProductDetailPage" style={{ textDecoration: "none" }}>
        <div >
          <Grid container alignItems="center" justifiyContent="center">
            <Grid lg={12} xs={10}>
              <img className=' img-fluid' src={props.img1} />
            </Grid>
            <Grid item lg={12} xs={10} md={10}>

              <div className='Newstyle'>
                <h6 className='feature-iteam text-black'>{props.title}</h6>
                <img src={props.img2} alt="sart" />
                <p className='card-prices'>{props.price}</p>
              </div>

            </Grid>

          </Grid>

        </div>
      </Link></div >
  )
}

export default ShopCard