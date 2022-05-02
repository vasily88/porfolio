import React,{useState,useEffect} from 'react';
import './style.css';

import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../drawer/drawer';

const Header = () => {

    const [drawerOpen,setDrawerOpen] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    }

    return(
        <div className='header'>

            <AppBar
                position='fixed'
                >
                <Toolbar>
                    <IconButton 
                        area-label="menu" 
                        onClick = {() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='mainLogo'>
                        Logo
                    </div>

                    <SideDrawer 
                        open = {drawerOpen}
                        onClose = {(value) => toggleDrawer(value)}
                    />

                </Toolbar>
            </AppBar>
            
        </div>

        
    );
}

export default Header;