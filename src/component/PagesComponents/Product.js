import { Input } from '@mui/material'
// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import TableProduct from './TableProductName'
import orderDetail from '../../assets/images/1.png';
import { Grid, Box } from '@mui/material';
import { Link } from "react-router-dom"


function Product() {
 return (
  <>
   <Grid container space={5} className="px-5 card-container" justifyContent="center">
    <Grid item lg={8} xs={12} md={12}>
     <div className='header-select-item'>
      <div>
       <input className="mx-5" type="checkbox" />
      </div>
      <div>
       <h5 className='mx-2'>Select All Items <span style={{ fontSize: '16px', color: '#747774' }}>&nbsp;&nbsp;&nbsp;(3 ITEMS)</span></h5>
      </div>
     </div>
     <div className='order-details'>
      <TableProduct
       Img={orderDetail}
       detail1="Lorem ipsum dolor sit amet, "
       detail2="consectetuer adipiscing .Lorem"
       time="09-01-2022   6:01:16 PM"
       price="$ 178.0"
       sale={<del>P50.00</del>}
      />
      <TableProduct
       Img={orderDetail}
       detail1="Lorem ipsum dolor sit amet, "
       detail2="consectetuer adipiscing .Lorem"
       time="09-01-2022   6:01:16 PM"
       price="$ 178.0"
       sale={<del>P50.00</del>}
      />
      <TableProduct
       Img={orderDetail}
       detail1="Lorem ipsum dolor sit amet, "
       detail2="consectetuer adipiscing .Lorem"
       time="09-01-2022   6:01:16 PM"
       price="$ 178.0"
       sale={<del>P50.00</del>}
      />
     </div>
    </Grid>
    <Grid item lg={4} xs={12} md={4}>
     <div className='cart-total'>
      <h3>CART TOTAL</h3>
      <div className='cart-text'>
       <div>
        <p>Subtotal</p>
        <p>Total</p>
       </div>
       <div className='cart-price'>
        <p>$ 750.0</p>
        <p>$ 750.0</p>
       </div>
      </div>
      <div className='cart-btn'>
       <Link to="/Billings"> <button type='button'>PROCEED TO CHECKOUT</button></Link>
      </div>
     </div>

    </Grid>
   </Grid>
  </>
 )
}

export default Product;