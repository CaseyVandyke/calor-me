import { useState, useEffect, Fragment } from 'react';
import { SlideData } from './SlideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/banner.scss';

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = SlideData.length;

    const nextSlide = () => {
        
    }

    return (
        <Fragment>
            <FaArrowAltCircleLeft /*className="left-arrow" onClick={ }*/ />
            <FaArrowAltCircleRight /*className="right-arrow" onClick={ }*/ />
            {SlideData.map((slide, i) => {
                return (
                    <div className="slider-container" key={i}>
                        <img className="slide" src={slide.image} alt="sliderimage" />
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Slider;