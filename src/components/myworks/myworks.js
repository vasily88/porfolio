import React from "react";
import Slider from "react-slick/lib/slider";

import imageSlider1 from '../../resources/images/1.jpg';
import './style.css';

const MyWork = () => {

    const settings = {
        isFinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '2vw',
        arrows: false,
    }

    return(
        <div className="myWork">
            <div className="wrapperMyWork">

                <Slider {...settings}>
                    <div className="sliderItem">
                        <imageSlider1 />
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