import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Icon from './Icon';
import Search from './Search';
import '../styles/navbar.scss';
import App from '../App';
import Login from '../components/Login';

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

                    <Route exact path="process.env.PUBLIC_URL" component={App} />
                    <Route path="/login" component={Login} />
            </header>
        </Router>
    )
}

export default Header;