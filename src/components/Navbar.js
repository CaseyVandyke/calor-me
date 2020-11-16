import React, {} from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import Icon from './Icon';
import Search from './Search';

const Header = () => {

    return (
        <header className="header">
            <Search />
            <Icon />
            <BrowserRouter>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                        Home
                        </NavLink>
                        <NavLink exact activeClassName="active" to="/">
                        About
                        </NavLink>
                        <NavLink exact activeClassName="active" to="/">
                        Contact
                        </NavLink>
                        <NavLink exact activeClassName="active" to="/">
                        Get Started
                        </NavLink>
                        <NavLink exact activeClassName="active" to="/">
                        Sign In
                        </NavLink>
                    </li>
                </ul>
            </BrowserRouter>
        </header>
    )
}

export default Header;