/* eslint-disable arrow-body-style */
import React from 'react';

import '../styles/Card.css';

import Icon from '../icon/01d.png';

const Card = () => {
    return (
        <div className="card">
            <h3 className="card-title">Miasto</h3>
            <ul className="card-list">
                <li className="card-list-item">Temp: 23C</li>
                <li className="card-list-item">Pressure: 1009hPa</li>
                <li className="card-list-item">Humidity: 48%</li>
                <li className="card-list-item">Wind: 5km/h</li>
                <li className="card-list-item">Temp Max: 27C</li>
                <li className="card-list-item">Temp Max: 19C</li>
                <li className="card-list-item icon"><img src={Icon} alt="ikona" /></li>
            </ul>
        </div>
    );
};
export default Card;
