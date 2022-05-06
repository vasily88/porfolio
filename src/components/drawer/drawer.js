import React from 'react';
import './drawer.css';

import { Drawer, List,ListItem } from '@material-ui/core';

const ItemDrawer = [
    {'where':'Home','moveTo':'Home'},
    {'where':'About','moveTo':'About'},
    {'where':'Portfolio','moveTo':'portfolio'},
    {'where':'Contact','moveTo':'Contact'}
]

const showList = (item) => {
    return(
        <ListItem button onClick={()=>alert(item.moveTo)} key={item.moveTo}>
            {item.where}
        </ListItem>
        );  
}

const SideDrawer = (props) => {
    return(
        <Drawer
            anchor={'right'}
            open={props.open}
            onClose = {() => props.onClose(false)}
        >
            <List component="nav">
                {ItemDrawer.map((item) => showList(item))};
            </List>
        </Drawer>
    );

}

export default SideDrawer;