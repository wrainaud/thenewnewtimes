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
                    <a className="nav-link" to="https://wrainaud.com/">
                        wrainaud.com
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav2;
