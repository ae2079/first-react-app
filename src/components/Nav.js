import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const location = useLocation();
    return (
        <nav className="main-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Homepage</Link>
            <Link to="/about-me" className={location.pathname === '/about-me' ? 'active' : ''}>About Me</Link>
        </nav>
    );
}

export default Nav;
