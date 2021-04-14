/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import ForecastElement from './ForecastElement';

import '../styles/WeatherForecast.css';

const WeatherForecast = () => {
    const [state] = useState([
        {
            temp: '23',
            pressure: '1090',
            humidity: '30',
            wind: '10',
            max: '29',
            min: '20',
        },
        {
            temp: '23',
            pressure: '1090',
            humidity: '30',
            wind: '10',
            max: '29',
            min: '20',
        },
        {
            temp: '23',
            pressure: '1090',
            humidity: '30',
            wind: '10',
            max: '29',
            min: '20',
        },
        {
            temp: '23',
            pressure: '1090',
            humidity: '30',
            wind: '10',
            max: '29',
            min: '20',
        },
    ]);
    return (
        <div className="page">
            <h1 className="title-page">Weather Forecast</h1>
            <div className="forecastpage">
                {state.map((element) => <ForecastElement data={element} />)}
            </div>
        </div>
    );
};
export default WeatherForecast;
