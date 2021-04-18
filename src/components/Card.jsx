/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import rounderValueHelper from '../helpers/rounderValueHelper';

import '../styles/Card.css';

const Card = ({ data }) => {
    const [moreIsVisible, setMoreIsVisible] = useState(false);
    const { city, icon } = data;
    const roundedValues = rounderValueHelper(data);
    const [
        temp, pressure, humidity, speed, tempMax, tempMin,
    ] = roundedValues;
    const listOfInfo = () => (
        <ul className="card-list">
            <li className="card-list-item">{`Temp: ${temp}°C`}</li>
            <li className="card-list-item">{`Pressure: ${pressure}hPa`}</li>
            <li className="card-list-item">{`Humidity: ${humidity}%`}</li>
            <li className="card-list-item">{`Wind: ${speed}km/h`}</li>
            <li className="card-list-item">{`Max: ${tempMax}°C`}</li>
            <li className="card-list-item">{`Min: ${tempMin}°C`}</li>
        </ul>
    );
    const showMoreHandle = () => setMoreIsVisible(!moreIsVisible);
    return (
        <div className="card">
            <h3 className="card-title">{city}</h3>
            <div className="card-info-wrapper">
                {moreIsVisible ? listOfInfo() : null}
                <div className="icon"><img src={`./icons/${icon}.png`} alt="ikona" /></div>
            </div>
            <button type="button" className="card-more-button" onClick={showMoreHandle}>Wiecej...</button>
        </div>
    );
};
export default Card;
