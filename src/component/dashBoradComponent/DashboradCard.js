
import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material'
const DashboradCard = (props) => {
 return (
  <Grid container
   className='spacing1'
   spacing={3}
   alignItems="center"
   justifyContent="center">
   <Grid item md={4} xs={6} className="spacing " >
    <img src={props.image} alt="dsd" className='Images img-fluid' />
   </Grid>
   <Grid item md={4} xs={6} sm={6} className="spacing">
    <Typography
     className="CardHeading"
    >
     {props.title}
    </Typography>
    <Typography className="CardAmount">
     {props.Amount}
    </Typography>
   </Grid>
  </Grid >
 )
}

export default DashboradCard