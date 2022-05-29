import React ,{Component} from "react";
import TimeCounter from '../timeCounter/timeCounter';
import Slider from "react-slick/lib/slider";
import Lottie from "react-lottie";

import arrowLottie from '../../resources/images/arrow.json';

import imageSlider1 from '../../resources/images/1.jpg';
import imageSlider2 from '../../resources/images/2.jpg';
import imageSlider3 from '../../resources/images/3.jpg';
import './style.css';

class MyWork extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render() {

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
            arrows: false,
      }

      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: arrowLottie,
        rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        }


        return(
            <div className="myWork">
                <div className="wrapperMyWork">

                    <h3>
                        My Work
                    </h3>

                    <div className="navSlider">

                        <button className="arrow-next" onClick={this.previous}>
                            <Lottie 
                                options={defaultOptions}
                            />
                        </button>

                        <button className="arrow-prev" onClick={this.previous}>
                            <Lottie 
                                options={defaultOptions}
                            />
                        </button>

                    </div>

                    <Slider ref={c=>(this.slider = c)} {...settings}>
                        {sliderArray.map((item) => mapItemSlider(item))}
                    </Slider>

                    <TimeCounter />

                </div>
            </div>
        );
    }
}

export default MyWork; 