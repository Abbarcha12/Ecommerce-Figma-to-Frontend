import React from 'react'
import {Grid, Box} from '@mui/material';
// import {Card,Typography} from '@mui/material';
// import orderDetail from './../../assests/Card.png'
import './Product.css'

import { useState } from "react"




function TableProduct(props) {
  const [num, setNum] = useState(0)
  
  return (
    <>
    <Box>
        <div className='ItemCards'>
          <input className='m-3' type="checkbox" />
          <img className="img-fluid m-3" src={props.Img} />
          <div className='m-3'>
          <p className='description'>{props.detail1} <br/> {props.detail2}</p>
          <p className='time'>{props.time}</p>
          </div>
          <div className='m-3'>
          <p className='price'>{props.price}</p>
          <p>{props.sale}</p>
          </div>
            <div className="d-flex">
              <button className='decrease' onClick={() => setNum(num - 1)}>-</button>
              <p className='m-3 quantity'>{num}</p>
              <button className='increase' onClick={() => setNum(num + 1)}>+</button>
            </div>
        </div>
  
        
    </Box>


    </>
    
  )
}

export default TableProduct