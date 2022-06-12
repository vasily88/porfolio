import React from 'react';

import Description from './description';
import Discount from './discount';

import './style.css';

const Highlight = () => {
    return(
        <div 
            style={{
                background:'#fff'
            }}
        >
            <Description />
            <Discount />
        </div>
    );
}

export default Highlight;