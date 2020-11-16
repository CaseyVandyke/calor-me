import React from 'react';
import logo from '../images/vaporwave.png';
import './icon.scss';

const Icon = () => {

    return (
        <div className="icon-container">
            <img src={logo} className="icon" alt="dumbbell"/>
        </div>
    )
}

export default Icon;