import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav className="teal darken-4">
                <ul className="right">
                    <li><NavLink to="/">Blogs</NavLink></li>
                    <li><NavLink to="/add">Add</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}


export default Header;
