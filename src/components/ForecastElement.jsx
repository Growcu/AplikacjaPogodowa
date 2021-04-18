import React from 'react';
import rounderValueHelper from '../helpers/rounderValueHelper';

import '../styles/ForecastElement.css';

const ForecastElement = ({ data }) => {
    const roundedValues = rounderValueHelper(data);
    const { date, icon } = data;
    const [
        temp, pressure, humidity, speed, tempMax, tempMin,
    ] = roundedValues;
    return (
        <div className="forecast-element">
            <h3 className="forecast-date">{date}</h3>
            <ul className="forecast-element-list">
                <li className="forecast-element-list-item">{`Temp: ${temp}°C`}</li>
                <li className="forecast-element-list-item">{`Pressure: ${pressure}hPa`}</li>
                <li className="forecast-element-list-item">{`Humidity: ${humidity}%`}</li>
                <li className="forecast-element-list-item">{`Wind: ${speed}km/h`}</li>
                <li className="forecast-element-list-item">{`Max: ${tempMax}°C`}</li>
                <li className="forecast-element-list-item">{`Min: ${tempMin}°C`}</li>
                <li className="forecast-element-list-item"><img src={`./icons/${icon}.png`} alt="icon" /></li>
            </ul>
        </div>
    );
};
export default ForecastElement;
