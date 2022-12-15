import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material"
import Dot from "../../assets/images/dot.png"
import circleImg from "../../assets/images/circle.png"

export default function Deposits() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid item xs={12} lg={12} >
        <Typography variant="h5" > visiotrs</Typography>
      </Grid>
      <Grid container spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center">

        <Grid item xs={12} lg={3} sx={{ m: "auto" }}><Typography sx={{ color: "red" }} variant="h4" >Recent month</Typography>
        </Grid>
        <Grid

          item xs={12} lg={12}>

          <div className='MainDiv '>
            <img src={circleImg} alt="circle" className='img-fluid' />
            <div className='ChartContent'><h6>99%</h6> <p>Website growth</p></div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={6} xs={12}> <img src={Dot} alt="dot" /> <span className='mt-5'>Social Media 60%</span></Grid>
        <Grid item lg={6} xs={12}><img src={Dot} alt="dot" /> <span className='mt-5'>Affiliate visitors 19%</span></Grid>

      </Grid>
      <Grid container>
        <Grid item lg={6} xs={12}> <img src={Dot} alt="dot" /> <span className='mt-5'>Purchased Visitors 20</span></Grid>
        <Grid item lg={6} xs={12}><img src={Dot} alt="dot" /> <span className='mt-5'>By advertisment 50</span></Grid>

      </Grid>
    </Box>
  );
}
