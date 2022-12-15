import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import BillingDetailForm from "../component/PagesComponents/BillingDetailForm/BillingDetailForm"
import BillingDetailsOrder from "../component/PagesComponents/BillingDetalisOrder/BillingDetailsOrder"

function BillingDetails() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item lg={8} md={12}>
          <BillingDetailForm />
        </Grid>
        <Grid item lg={4} md={12}>
          <BillingDetailsOrder />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BillingDetails