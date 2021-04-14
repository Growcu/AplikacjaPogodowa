/* eslint-disable arrow-body-style */
import React from 'react';

import SmogStatistic from './SmogStatistic';

import '../styles/WeatherToday.css';

const WeatherToday = () => {
    return (
        <div className="page">
            <h2 className="title-page">Weather Today</h2>
            <div className="weather-today-page">
                <div className="weather-today">
                    <h1 className="weather-today-title">Miasto</h1>
                    <ul className="weather-today-list">
                        <li className="weather-today-list-item">Temp: 23C</li>
                        <li className="weather-today-list-item">Pressure: 1009hPa</li>
                        <li className="weather-today-list-item">Humidity: 48%</li>
                        <li className="weather-today-list-item">Wind: 5km/h</li>
                        <li className="weather-today-list-item">Temp Max: 27C</li>
                        <li className="weather-today-list-item">Temp Max: 19C</li>
                    </ul>
                </div>
                <SmogStatistic />
            </div>
        </div>
    );
};
export default WeatherToday;
