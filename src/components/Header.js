import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul className="right">
                    <li><NavLink to="/">Blogs</NavLink></li>
                    <li><NavLink to="/add">Add</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}


export default Header;
