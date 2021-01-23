import logo from '../images/vaporwave.png';
import '../styles/navbar.scss';

const Icon = () => {

    return (
        <div className="icon-container">
            <img src={logo} className="icon" alt="logo" />
        </div>
    )
}

export default Icon;