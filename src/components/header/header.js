import React,{useState,useEffect} from 'react';
import './style.css';

import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../drawer/drawer';

const Header = () => {

    const [drawerOpen,setDrawerOpen] = useState(false);
    const [headerFixedColor,setHeaderFixedColor] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    }

    const toggleScroll = () => {
        console.log();
        if (window.scrollY > 0){
            setHeaderFixedColor(true);
        }else{
            setHeaderFixedColor(false);
        }
    }

    useEffect(() => {
       window.addEventListener('scroll',toggleScroll);
    },[]);

    return(
        <div className='header'>

            <AppBar
                position='fixed'
                style={{
                    background: headerFixedColor ? '#000' : 'transparent'
                }}
                >
                <Toolbar>
                    <IconButton 
                        area-label="menu" 
                        onClick = {() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='mainLogo'>
                        Vasily
                        <br />
                        <span>
                        Loban
                        </span>
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