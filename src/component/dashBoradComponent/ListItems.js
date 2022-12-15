import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LanguageIcon from '@mui/icons-material/Language';
import PercentIcon from '@mui/icons-material/Percent';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export const MainListItems = (
 <React.Fragment>
  <ListItemButton>
   <ListItemIcon>
    <DashboardIcon />
   </ListItemIcon>
   <ListItemText primary="Dashboard" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <Inventory2OutlinedIcon />
   </ListItemIcon>
   <ListItemText primary="Products" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <ShoppingCartIcon />
   </ListItemIcon>
   <ListItemText primary="Orders" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <PeopleIcon />
   </ListItemIcon>
   <ListItemText primary="Customers" />
  </ListItemButton>

  <ListItemButton>
   <ListItemIcon>
    <ReviewsIcon />
   </ListItemIcon>
   <ListItemText primary="Reviews" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <LayersIcon />
   </ListItemIcon>
   <ListItemText primary="Transcations" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <LanguageIcon />
   </ListItemIcon>
   <ListItemText primary="Sellers" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <PercentIcon />
   </ListItemIcon>
   <ListItemText primary="Hot Offers" />
  </ListItemButton>
  <ListItemButton>
   <ListItemIcon>
    <NotificationsNoneIcon />
   </ListItemIcon>
   <ListItemText primary="new" />
  </ListItemButton>
 </React.Fragment>

)



