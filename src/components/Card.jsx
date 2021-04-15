/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/Card.css';

import Icon from '../icon/01d.png';

const Card = () => {
    const data = useSelector((store) => store.findWeather);

    const {
        city, temp, pressure, humidity, speed, tempMax, tempMin,
    } = data;

    return (
        <div className="card">
            <h3 className="card-title">{city}</h3>
            <div className="card-info-wrapper">
                <ul className="card-list">
                    <li className="card-list-item">{`Temp: ${temp}C`}</li>
                    <li className="card-list-item">{`Pressure: ${pressure}hPa`}</li>
                    <li className="card-list-item">{`Humidity: ${humidity}%`}</li>
                    <li className="card-list-item">{`Wind: ${speed}km/h`}</li>
                    <li className="card-list-item">{`Max: ${tempMax}C`}</li>
                    <li className="card-list-item">{`Min: ${tempMin}C`}</li>
                </ul>
                <div className="icon"><img src={Icon} alt="ikona" /></div>
            </div>
        </div>
    );
};
export default Card;
