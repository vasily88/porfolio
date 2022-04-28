import React from 'react';
import './style.css';

import Menu from '../drawer/drawer';

const Header = () => {
    return(
        <div className='header'>
            <div className='menu'>
                <Menu />
                <div className='mainLogo'>
                    Logo
                </div>
            </div>
        </div>
    );
}

export default Header;