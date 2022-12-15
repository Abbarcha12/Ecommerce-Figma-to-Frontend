import React from 'react'

import { Link } from "react-router-dom"

import "../../Layout/Login.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function BankDetails() {
 return (
  <div>
   <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
     <Grid item xl={12} lg={5} md={7} xs={12}>
      <form action="/#" className='login-form'>
       <legend className="text-center text-uppercase my-5 Login-form-heading">Banking Details</legend>
       <div className='form-grp'>
        <label htmlFor="text" className='ps-2 pe-4'>Credit Card Number</label>
        <input className="py-3 px-4 my-3" type="text" />
       </div>
       <div className="form-grp">
        <label htmlFor="text" className='ps-2 pe-4'>CVS</label>
        <input className="py-3 px-4 my-3" type="Password" />
       </div>
       <div className="form-grp">
        <label htmlFor="Date" className='ps-2 pe-4'>Expire Date</label>
        <input className="py-3 px-4 my-3" type="Password" />
       </div>
       <Link to="/home"> <button className='text-uppercase text-light py-2 my-5'>Pay</button>
       </Link>
      </form>

     </Grid>
    </Grid>
   </Box>
  </div>
 )
}

export default BankDetails