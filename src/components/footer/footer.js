import React from 'react';
import { Fade } from 'react-awesome-reveal';


import './style.css';

const Footer = () => {
    return(
            <div className='footer'>

                <Fade triggerOnce>
                    <div className='rightFooter'>
                        <h3>
                            Contact
                        </h3>
                        <p>
                            Tel: 0548313929
                        </p>
                        <p>
                            Address: Rehovot
                        </p>
                    </div>
                </Fade>

            </div>
    );
}

export default Footer;