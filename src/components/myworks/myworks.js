import React from "react";
import Slider from "react-slick/lib/slider";

import imageSlider1 from '../../resources/images/1.jpg';
import imageSlider2 from '../../resources/images/2.jpg';
import imageSlider3 from '../../resources/images/3.jpg';
import './style.css';

const MyWork = () => {

    const settings = {
        speed: 500,
        slidesToShow: 1.665,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
    }

    return(
        <div className="myWork">
            <div className="wrapperMyWork">

                <Slider {...settings}>
                    <div className="sliderItem">
                        <img src={imageSlider1} alt="picture1" />
                    </div>
                    <div className="sliderItem">
                        <img src={imageSlider2} alt="picture2" />
                    </div>
                    <div className="sliderItem">
                        <img src={imageSlider3} alt="picture3" />
                    </div>

                </Slider>

            </div>
        </div>
    );
}

export default MyWork;