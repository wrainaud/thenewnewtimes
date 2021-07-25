import React from 'react';
import {Link} from 'react-router-dom';

const Nav2 = () => (
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
            The NewNew Times
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="http://wrainaud.com/">
                        wrainaud.com
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav2;
