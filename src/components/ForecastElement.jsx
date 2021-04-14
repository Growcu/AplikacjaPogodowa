/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/ForecastElement.css';

const ForecastElement = ({ data }) => {
    const {
        temp, pressure, humidity, wind, max, min,
    } = data;
    return (
        <div className="forecast-element">
            <h3 className="forecast-date">Date</h3>
            <ul className="forecast-element-list">
                <li className="forecast-element-list-item">{`Temp: ${temp}C`}</li>
                <li className="forecast-element-list-item">{`Pressure: ${pressure}hPa`}</li>
                <li className="forecast-element-list-item">{`Humidity: ${humidity}%`}</li>
                <li className="forecast-element-list-item">{`Wind: ${wind}km/h`}</li>
                <li className="forecast-element-list-item">{`Max: ${max}C`}</li>
                <li className="forecast-element-list-item">{`Min: ${min}hPa`}</li>
            </ul>
        </div>
    );
};
export default ForecastElement;
