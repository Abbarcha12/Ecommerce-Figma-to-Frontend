import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Doller from "../assets/images/a.png"
import CartImg from "../assets/images/b.png"
import ProductImg from "../assets/images/c.png"
import {
  MainListItems
} from '../component/dashBoradComponent/ListItems';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import "./dashborad.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import ListItems from '../component/ListItems';
import List from '@mui/material/List';
// import Deposits from './Deposits';
// import Orders from './Orders';
import SearchIcon from '@mui/icons-material/Search';
import DashboradCard from '../component/dashBoradComponent/DashboradCard';
import Chart from '../component/dashBoradComponent/Chart';
import Deposits from '../component/dashBoradComponent/Deposits';
import Orders from '../Layout/Orders';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}

    </Typography>
  );
}




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <MenuOpenIcon
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >

            </MenuOpenIcon>
            <Container

              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Grid>
                <SearchIcon className="SearchIcon" />

                <TextField
                  label="Search" variant="standard"
                />
              </Grid>

            </Container>
            <WbSunnyIcon />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <AccountCircleIcon className='Ions' />
            <ArrowDropDownIcon />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <div className='Dashboradlogo'> <h3>COMPANY <span>LOGO
            </span></h3> </div>

            <IconButton onClick={toggleDrawer}>
              <MenuOpenIcon />
            </IconButton>

          </Toolbar>
          <Divider />

          <List component="nav">
            {MainListItems}

          </List>



        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Grid container >
              <Grid item md={4} xs={12} className="spacing" sx={{ mt: 1 }} >
                <Paper><DashboradCard className="spacing1" image={Doller} title={"Total Sales"} Amount={"23434"} /></Paper>
              </Grid>
              <Grid item md={4} xs={12} className="spacing" sx={{ mt: 1 }}>
                <Paper><DashboradCard image={CartImg} title="Total Orders" Amount={213433} /></Paper>

              </Grid>
              <Grid item md={4} xs={12} className="spacing" sx={{ mt: 1 }}>
                <Paper><DashboradCard image={ProductImg} title="Total products" Amount="500" /></Paper>

              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} lg={7}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',

                  }}
                >
                  <Chart />
                </Paper>
              </Grid>

              <Grid item xs={12} md={5} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',


                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>

            </Grid>

          </Container>
          <Orders />
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}