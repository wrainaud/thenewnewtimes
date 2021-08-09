import React from 'react';
import {Link} from 'react-router-dom';

const Nav2 = () => (
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
            The NewNew Times
        </Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="https://wrainaud.com/">
                        wrainaud.com
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav2;
