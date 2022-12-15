import { Divider, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import "./title.css"
const Title = (props) => {
 return (
  <Box sx={{ m: 3 }}><Link to="#" className='Taqss'><Typography className="title" variant="h6">{props.title}</Typography></Link>
  </Box >
 )
}

export default Title