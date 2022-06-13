import React from 'react';

import {Fade, Slide} from 'react-awesome-reveal';

const Discount = () => {
    return(
        <div className='wrapperDiscount'>

            <Slide right className='discountRight'>
                <p>
                    my name is description amd this is my web site, no imfre cdommg dofjg.
                    kjfu ldlll siiii, dfifkdl kdjjfk ieeiei oowols dlfdklkflle slfkslfklf.
                    my name is description amd this is my web site, no imfre cdommg dofjg.
                    kjfu ldlll siiii, dfifkdl kdjj
                </p>
            </Slide>

            <Fade 
                delay={1000} 
                className='discountLeft'
                onVisibilityChange={(inView) => {
                    if (inView){
                        console.log(inView);
                    }
                }}
                >
                <p>
                    <span>30%</span>
                    <span>OFF</span>
                </p>
            </Fade>
            
        </div>
    );
}

export default Discount;