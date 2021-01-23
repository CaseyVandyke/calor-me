import { SlideData } from './SlideData';

const Slider = () => {
    return (
        <>
            {SlideData.map((slide, i) => {
                return (
                    <div className="slider-container" key={i}>
                        <img className="slide" src={slide.image} alt="sliderimage" />
                    </div>
                )
            })}
        </>
    )
}

export default Slider;