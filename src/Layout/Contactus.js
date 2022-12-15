import React from "react";
import "./Contact.css";
import { Button, Grid, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
const Contact = () => {
 return (
  <>
   <Grid container alignItme="center" justifyContent="center" className="contact-backImage img-fluid  ">
    <Grid item lg={10} md={8} xs={12} className=" contact-all" sx={{ mt: 5, m: 3 }}>
     <Typography variant="p" className="contact-title">
      SPRING / SUMMER COLLECTION 2022
     </Typography>
     <Typography variant="h3" className="contact-heading">
      Here You Can <br /> Contact us to Get <br /> Best Result’s{" "}
     </Typography>

    </Grid>


   </Grid>
   <Grid container alignItme="center" justifyContent="center" className=" iframe-all ">

    <Grid item lg={4.4} xs={10} sx={{ m: 3 }} className=" contact-mail" >
     <Typography variant="h4">MY CONTACT INFO</Typography>
     <form id="first_name">
      <TextField id="outlined-basic" type="text" label="First Name" fullWidth sx={{ mt: 4 }} />
      <TextField id="outlined-basic" label="Phone Number" fullWidth sx={{ mt: 4 }} />

      <TextField id="outlined-basic" type="email" label="Email Address" fullWidth sx={{ mt: 5 }} />
      <Typography variant="h4" sx={{ mt: 4 }}>NEED YOUR INFORMATION</Typography>
      <TextField id="outlined-basic" type="text" label="First Name" fullWidth sx={{ mt: 5 }} />
      <TextField id="outlined-basic" type="text" label="Last Name" fullWidth sx={{ mt: 5 }} />
      <TextField id="outlined-basic" type="email" label="Email Address" fullWidth sx={{ mt: 5 }} />
      <TextField
       // id="outlined-multiline-static"
       className="textFiled1"
       label="Message"
       sx={{ mt: 5 }}
       multiline
       rows={10}
       coloums={30}
       variant="outlined"
      />
      <Button sx={{ mt: 5 }} size="small" type="button" className="contact-send">
       Send
      </Button>

     </form>
    </Grid>

    <Grid item lg={6.3} sx={{ mt: 12 }} xs={12}>
     <div className="contact-map ">
      <iframe
       className="iframe-contact"
       title="Ifram"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0727927305975!2d150.87852825050163!3d-33.99066398052765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12eb6a5aebec29%3A0x56a7c67ad6031518!2s22%20Bunbury%20Rd%2C%20Macquarie%20Fields%20NSW%202564%2C%20Australia!5e0!3m2!1sen!2s!4v1663520221681!5m2!1sen!2s"
       height="1100"
       width="100%"
       allowfullscreen=""
       loading="lazy"
       referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
     </div>
    </Grid>

   </Grid>
  </>
 );
};

export default Contact;