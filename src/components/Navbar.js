import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar">
            <h1>{ title }<img src="https://image.flaticon.com/icons/svg/270/270798.svg" alt="" className="githubIcon" /> </h1>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                </ul> 
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired,
    icon: Proptypes.string.isRequired
}

export default Navbar
