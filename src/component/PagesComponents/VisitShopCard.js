import React from "react";
import "./VisitShopCard.css";
import Card from '@mui/material/Card';
import { Button } from "@mui/material";

export const VisitShopCard = (props) => {
 return (
  <div>
   <Card className='card1'>
    <img src={props.img} />
    <Button>{props.button}</Button>
   </Card>
  </div>
 );
};