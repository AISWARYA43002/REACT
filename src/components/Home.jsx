import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CONTACT US
        </Typography>
        <Link to={'/'}><Button style={{color:"white"}}>About</Button></Link>
        
        <Link to={'/Login'}><Button style={{color:"white"}}>Login</Button></Link>
        <Link to={'/Signup'}><Button style={{color:"white"}}>Register</Button></Link>
        <Link to={'/Sample'}><Button style={{color:"white"}}>Cards</Button></Link>

        
        
      </Toolbar>
    </AppBar>
    </Box> 
  )
}

export default Home
