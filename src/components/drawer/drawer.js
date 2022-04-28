import React,{useState} from 'react';
import './drawer.css';

import { Drawer, IconButton } from '@material-ui/core';

import BurgerIcon from '@material-ui/icons/Menu';

const [navbarOpen,setNavbarOpen] = useState(false);

const Menu = () => {
    return(
        <div className='drawer'>
            <IconButton>
                <BurgerIcon />
            </IconButton>
            <Drawer>

            </Drawer>
        </div>
    );

}

export default Menu;