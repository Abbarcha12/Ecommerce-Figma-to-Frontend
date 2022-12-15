import React from 'react'
import {
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Typography,
 Box
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './Faq.css'
export const MuiAccordion = () => {
 return (
  <Box>
   <Typography variant='h5' sx={{ ml: 3 }} className='Faq-heading'>FAQS</Typography>
   <div className='Faq-container'>
    <div>
     <br />
     <h1 className='Faq-head'>Frequently ask <span className='Faq-span'>questions</span></h1>
    </div>
    <Accordion className='accordion accordion-mian'>
     <AccordionSummary id="panel1-header" arial-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      <Typography className='Head1'>1: Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography className='answer'>Answer : Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionDetails>
    </Accordion>
    <Accordion className='accordion'>
     <AccordionSummary id="panel1-header" arial-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      <Typography className='Head1'>1: Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography className='answer'>Answer : Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionDetails>
    </Accordion>
    <Accordion className='accordion'>
     <AccordionSummary id="panel1-header" arial-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      <Typography className='Head1'>1: Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography className='answer'>Answer : Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionDetails>
    </Accordion>
    <Accordion className='accordion'>
     <AccordionSummary id="panel1-header" arial-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      <Typography className='Head1'>1: Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography className='answer'>Answer : Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionDetails>
    </Accordion>
    <Accordion className='accordion'>
     <AccordionSummary id="panel1-header" arial-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      <Typography className='Head1'>1: Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography className='answer'>Answer : Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionDetails>
    </Accordion>
    <Accordion className='accordion'>
     <AccordionSummary id="panel1-header" arial-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      <Typography className='Head1'>1: Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography className='answer'>Answer : Lorem ipsum dolor sit amet, consectetuer adipiscing . Aenean commodo ligula eget </Typography>
     </AccordionDetails>
    </Accordion>
   </div>
  </Box>
 )
};
export default MuiAccordion;