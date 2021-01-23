import Slider from './Slider';
import '../styles/banner.scss';

const Banner = () => {

    return (
        <div className="banner-container">
            <div className="left-side">
                <h1 className="banner-heading">WayLift</h1>
                <h3 className="banner-text">Record workouts, track progress, and challenge yourself and friends for a better you!</h3>
            </div>
            <Slider />
        </div>
    )
}

export default Banner;