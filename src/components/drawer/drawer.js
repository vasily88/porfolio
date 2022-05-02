import React from 'react';
import './drawer.css';

import { Drawer, List,ListItem } from '@material-ui/core';


const SideDrawer = (props) => {
    console.log(props);
    return(
        <Drawer
            anchor={'right'}
            open={props.open}
            onClose = {() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=>alert('click')}>
                    Home
                </ListItem>
            </List>
        </Drawer>
    );

}

export default SideDrawer;