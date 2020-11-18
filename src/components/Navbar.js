import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Icon from './Icon';
import Search from './Search';
import './navbar.scss';

const Header = () => {

    return (
        <Router>
            <header className="header">
                <Icon />
                    <ul className="navlink">
                        <li>
                            <NavLink exact activeClassName="active" to="/">
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/about">
                            About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact">
                            Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/start">
                            Get Started
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/login">
                            Sign In
                            </NavLink>
                        </li>
                    </ul>
            </header>
        </Router>
    )
}

export default Header;