import React from 'react';
import { Link } from 'gatsby';

import './nav.css';

const Nav = () => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom:"2px solid #F0E6EF" }} to="/">Home</Link>
            </li>
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #F0E6EF" }} to="/about">About</Link>
            </li>
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #F0E6EF" }} to="/blog">Blog</Link>
            </li>
            <li className="nav-list-item">
                <Link activeStyle={{ borderBottom: "2px solid #F0E6EF" }} to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;