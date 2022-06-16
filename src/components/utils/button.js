import React from 'react';

import './button.css';

const Button = (props) => {
    return(
        <div 
            className='button'
            style={{
                background:'red',
                color:'#fff'
            }}
        >
            Button
        </div>
    );
}

export default Button;