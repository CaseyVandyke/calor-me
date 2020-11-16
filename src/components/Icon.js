import React from 'react';
import logo from '../images/dumbbell.jpg';
import './icon.scss';

const Icon = () => {

    return (
        <div className="icon-container">
            <img src={logo} className="icon" alt="dumbbell"/>
        </div>
    )
}

export default Icon;