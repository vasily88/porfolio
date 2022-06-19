import React from 'react';

import './button.css';

const Button = (props) => {
    
    return(
        <div>
            <a 
                className='button'
                href={props.url}
                target='_blank'
                style={{
                    background:props.background,
                    color:props.color,
                    height:props.height,
                    width:props.width
                }}
                >
                {props.buttonTxt ? props.buttonTxt : 'Click Here !!!'}
            </a>
        </div>
    );
}

export default Button;