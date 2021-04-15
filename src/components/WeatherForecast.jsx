import React from 'react';
import { useSelector } from 'react-redux';

import ForecastElement from './ForecastElement';

import '../styles/WeatherForecast.css';

const WeatherForecast = () => {
    const forecastData = useSelector((store) => store.forecast);
    return (
        <div className="page">
            <h1 className="title-page">Weather Forecast</h1>
            <div className="forecastpage">
                {forecastData.map((element) => <ForecastElement data={element} />)}
            </div>
        </div>
    );
};
export default WeatherForecast;
