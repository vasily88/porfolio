import React from "react";
import Slider from "react-slick/lib/slider";

import imageSlider1 from '../../resources/images/1.jpg';
import imageSlider2 from '../../resources/images/2.jpg';
import imageSlider3 from '../../resources/images/3.jpg';
import './style.css';

const MyWork = () => {

    const sliderArray = [
        {'src':imageSlider1,'key':'1','alt':'picture1'},
        {'src':imageSlider2,'key':'2','alt':'picture1'},
        {'src':imageSlider3,'key':'3','alt':'picture1'},
    ]

    const mapItemSlider = (item) => {
        return(
            <div className="sliderItem" key={item.key} >
                <div className="wrapperMyWorkSliderItem">
                    <img src={item.src} alt={item.alt} />   
                </div>
            </div>
        );
    }

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

                <h3>
                    My Work
                </h3>

                <Slider {...settings}>
                    {sliderArray.map((item) => mapItemSlider(item))}
                </Slider>

            </div>
        </div>
    );
}

export default MyWork;