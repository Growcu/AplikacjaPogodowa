/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { searchCurrentWeatherInfo, searchPollutionInfo } from '../actions/WeatherTodayActions';

import SmogStatistic from './SmogStatistic';
import alertHelper from '../helpers/alertHelper';
import rounderValueHelper from '../helpers/rounderValueHelper';

import '../styles/WeatherToday.css';

const WeatherToday = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const weatherToday = useSelector((store) => store.weatherToday);

    const roundedValues = rounderValueHelper(weatherToday.weather);
    const { city } = weatherToday.weather;
    const [
        temp, pressure, humidity, speed, tempMax, tempMin,
    ] = roundedValues;

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(searchCurrentWeatherInfo(currentLocation));
                dispatch(searchPollutionInfo(currentLocation));
            }, () => {
                alertHelper('Oops!', 'Nie możemy teraz pobrać Twojej lokalizacji', 'error', 'Ok');
                history.push('/');
            });
        } else {
            alertHelper('Oops!', 'Nie mamy możliwości pobrania Twojej lokalizacji', 'error', 'Ok');
            history.push('/');
        }
    };

    useEffect(() => (
        getLocation()
    ), []);

    return (
        <div className="page">
            <h2 className="title-page">Pogoda Dzisiaj</h2>
            <div className="weather-today-page">
                <div className="weather-today">
                    <h1 className="weather-today-title">{city}</h1>
                    <ul className="weather-today-list">
                        <li className="weather-today-list-item">{`Temp: ${temp}°C`}</li>
                        <li className="weather-today-list-item">{`Pressure: ${pressure}hPa`}</li>
                        <li className="weather-today-list-item">{`Humidity: ${humidity}%`}</li>
                        <li className="weather-today-list-item">{`Wind: ${speed}km/h`}</li>
                        <li className="weather-today-list-item">{`Max: ${tempMax}°C`}</li>
                        <li className="weather-today-list-item">{`Min: ${tempMin}°C`}</li>
                    </ul>
                </div>
                <SmogStatistic />
            </div>
        </div>
    );
};
export default WeatherToday;
