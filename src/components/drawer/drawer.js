import React from 'react';
import { scroller } from 'react-scroll';

import './drawer.css';

import CloseIcon from '@material-ui/icons/Close';
import { Drawer, List,ListItem, Divider, IconButton } from '@material-ui/core';

const SideDrawer = (props) => {

    const ItemDrawer = [
        {'where':'Home','moveTo':'Home'},
        {'where':'About','moveTo':'About'},
        {'where':'Portfolio','moveTo':'portfolio'},
        {'where':'Footer','moveTo':'Footer'}
    ]
    
    const scrooToElement = (element) => {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-150
        });
        props.onClose(false);
    }
    
    const showList = (item) => {
        return(
            <ListItem button onClick={()=>scrooToElement(item.where)} key={item.moveTo}>
                {item.where}
            </ListItem>
            );  
    }

    return(
        <Drawer
            anchor={'right'}
            open={props.open}
            onClose = {() => props.onClose(false)}
        >
            <div className='drawerHeader'>
                
                <IconButton onClick={() => props.onClose(false)}>
                    <CloseIcon />
                </IconButton>
            </div>

            <Divider />

            <List component="nav">
                {ItemDrawer.map((item) => showList(item))}
            </List>
        </Drawer>
    );

}

export default SideDrawer;