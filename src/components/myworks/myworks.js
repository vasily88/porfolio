import React from "react";
import Slider from "react-slick/lib/slider";

import './style.css';

const MyWork = () => {

    const settings = {
        isFinite: true,
        speed: 500,
        slideeToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '2vw',
        arrows: false,
        rtl:true
    }

    return(
        <div className="myWork">
            <div className="wrapperMyWork">

                <Slider {...settings}>
                    <div className="sliderItem">
                        <p>
                            1
                        </p>
                    </div>
                    <div className="sliderItem">
                        <p>
                            2
                        </p>
                    </div>
                    <div className="sliderItem">
                        <p>
                            3
                        </p>
                    </div>
                    <div className="sliderItem">
                        <p>
                            4
                        </p>
                    </div>
                    <div className="sliderItem">
                        <p>
                            5
                        </p>
                    </div>
                </Slider>

            </div>
        </div>
    );
}

export default MyWork;