import React from 'react';
import './style.css';

import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '../drawer/drawer';

const Header = () => {
    return(
        <div className='header'>

            <AppBar
                position='fixed'
                >
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <div className='mainLogo'>
                        Logo
                    </div>
                </Toolbar>
            </AppBar>
            
        </div>

        
    );
}

export default Header;