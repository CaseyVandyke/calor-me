import { NavLink } from 'react-router-dom'
import Icon from './Icon';
import '../styles/navbar.scss';

const Navbar = () => {

    return (
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
                    <NavLink activeClassName="active" to="/register">
                        Register
                        </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/login">
                        Login
                        </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;