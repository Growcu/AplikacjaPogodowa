/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SmogStatistic from './SmogStatistic';

import '../styles/WeatherToday.css';

const WeatherToday = () => {
    const weatherToday = useSelector((store) => store.weatherToday);
    const {
        city, temp, pressure, humidity, tempMax, tempMin, speed,
    } = weatherToday.weather;

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                console.log(currentLocation);
            }, () => {
                const errorMessage = 'We can not read your location now';
                return errorMessage;
            });
        } else {
            const errorMessage = 'We can not find "gelocation" in navigator';
            return errorMessage;
        }
    };

    useEffect(() => (
        getLocation()
    ), []);

    return (
        <div className="page">
            <h2 className="title-page">Weather Today</h2>
            <div className="weather-today-page">
                <div className="weather-today">
                    <h1 className="weather-today-title">{city}</h1>
                    <ul className="weather-today-list">
                        <li className="weather-today-list-item">{`Temp: ${temp}C`}</li>
                        <li className="weather-today-list-item">{`Pressure: ${pressure}hPa`}</li>
                        <li className="weather-today-list-item">{`Humidity: ${humidity}%`}</li>
                        <li className="weather-today-list-item">{`Wind: ${speed}km/h`}</li>
                        <li className="weather-today-list-item">{`Max: ${tempMax}C`}</li>
                        <li className="weather-today-list-item">{`Min: ${tempMin}C`}</li>
                    </ul>
                </div>
                <SmogStatistic />
            </div>
        </div>
    );
};
export default WeatherToday;
