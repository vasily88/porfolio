import React,{useState} from 'react';
import {Fade, Slide} from 'react-awesome-reveal';
import Button from '../utils/button';


const Discount = () => {

    const [countPercentage,setCountPercentage] = useState({
        'percentage': 0
    });
    
    const percentage = (precetage) => {
        var x = 0;
        var intervalID = setInterval(function () {
        
           setCountPercentage({
               'percentage': x
           });
        
           if (++x === precetage+1) {
               window.clearInterval(intervalID);
           }
        }, 50);
    }

    return(
        <div className='wrapperDiscount'>

            <Slide right className='discountRight'>
                <div className='wrapperRightParagraphButton'>
                    <p>
                        my name is description amd this is my web site, no imfre cdommg dofjg.
                        kjfu ldlll siiii, dfifkdl kdjjfk ieeiei oowols dlfdklkflle slfkslfklf.
                        my name is description amd this is my web site, no imfre cdommg dofjg.
                        kjfu ldlll siiii, dfifkdl kdjj
                    </p>
                    <Button 
                        url='https://www.google.com/'
                        buttonTxt='Click Me!!!'
                        background="#000"
                        color="#fff"
                        width="26vw"
                        height="5vw"
                    />
                </div>
            </Slide>

            <Fade 
                delay={1000} 
                className='discountLeft'
                onVisibilityChange={(inView) => {
                    if (inView){
                        percentage(30);
                    }
                }}
                >
                <p>
                    <span>{countPercentage.percentage}%</span>
                    <span>OFF</span>
                </p>
            </Fade>
            
        </div>
    );
}

export default Discount;