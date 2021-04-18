/* eslint-disable react/prop-types */
import React from 'react';

import rounderValueHelper from '../helpers/rounderValueHelper';

import '../styles/Card.css';

const Card = ({ data }) => {
    const { city, icon } = data;
    const roundedValues = rounderValueHelper(data);
    const [
        temp, pressure, humidity, speed, tempMax, tempMin,
    ] = roundedValues;
    return (
        <div className="card">
            <h3 className="card-title">{city}</h3>
            <div className="card-info-wrapper">
                <ul className="card-list">
                    <li className="card-list-item">{`Temp: ${temp}°C`}</li>
                    <li className="card-list-item">{`Pressure: ${pressure}hPa`}</li>
                    <li className="card-list-item">{`Humidity: ${humidity}%`}</li>
                    <li className="card-list-item">{`Wind: ${speed}km/h`}</li>
                    <li className="card-list-item">{`Max: ${tempMax}°C`}</li>
                    <li className="card-list-item">{`Min: ${tempMin}°C`}</li>
                </ul>
                <div className="icon"><img src={`./icons/${icon}.png`} alt="ikona" /></div>
            </div>
        </div>
    );
};
export default Card;
