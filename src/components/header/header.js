import React from 'react';
import './style.css';

import Drawer from '../drawer/drawer';

const Header = () => {
    return(
        <div className='header'>
            <div className='menu'>
                <Drawer />
                <div className='mainLogo'>
                    Logo
                </div>
            </div>
        </div>
    );
}

export default Header;