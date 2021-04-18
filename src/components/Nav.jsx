/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import '../styles/Nav.css';

const Nav = () => {
    const [isVisibleNav, setIsVisibleNav] = useState(false);
    const [isCrossed, setIsCrossed] = useState(false);
    const handleShowNav = () => {
        setIsVisibleNav(!isVisibleNav);
        setIsCrossed(!isCrossed);
    };
    return (
        <nav className={`nav ${isVisibleNav ? 'visible' : ''}`}>
            <div className="hamburger-icon" onClick={handleShowNav} onKeyDown={handleShowNav}>
                <div className={`line line-one ${isCrossed ? 'isCrossed' : ''}`} />
                <div className={`line line-two ${isCrossed ? 'isCrossed' : ''}`} />
                <div className={`line line-three ${isCrossed ? 'isCrossed' : ''}`} />
            </div>
            <ul className="nav-list">
                <li className="nav-item"><a href="/" className="nav-link">Szukaj</a></li>
                <li className="nav-item"><a href="/weatherToday" className="nav-link">Dzisiaj</a></li>
                <li className="nav-item"><a href="/weatherForecast" className="nav-link">Prognoza</a></li>
            </ul>
        </nav>
    );
};
export default Nav;
