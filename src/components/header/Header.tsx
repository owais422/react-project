import React, { useState } from 'react'
import { Grid, Toolbar , AppBar,Tabs,Tab} from '@mui/material';
import "./header.css"
import Buttons from '../button/Button'


const Header = () => {
  const [value, setValue] = useState();
  return (
    
    <AppBar >
      <Toolbar className="AppBar">
      <Grid container>
        <Grid item xs={3}> 
          <img src="logo.png" alt="logo" width="200px" />
        </Grid>
        <Grid item xs={6}>
      <Tabs className="tab-link" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
       <Tab label="Home" className="nav-link"/>
        <Tab label="About Us" className="nav-link"/>
        <Tab label="Courses" className="nav-link"/>
        <Tab label="Contact Us" className="nav-link"/>
      </Tabs>
        </Grid>
        <Grid item xs={3} className="hed-btn">
        <Buttons />
        <Buttons/>
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
    
      
    
  )
}

export default Header