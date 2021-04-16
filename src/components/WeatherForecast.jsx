/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ForecastElement from './ForecastElement';

import '../styles/WeatherForecast.css';
import { searchForecast } from '../actions/ForecastActions';

const WeatherForecast = () => {
    const dispatch = useDispatch();
    const forecastData = useSelector((store) => store.forecast);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(searchForecast(currentLocation));
            }, () => {
                const errorMessage = 'We can not read your location now';
                return errorMessage;
            });
        } else {
            const errorMessage = 'We can not find "gelocation" in navigator';
            return errorMessage;
        }
    };

    const listForecastElement = () => (
        forecastData.map((element, index) => <ForecastElement key={index} data={element} />)
    );

    useEffect(() => (
        getLocation()
    ), []);

    return (
        <div className="page">
            <h1 className="title-page">Weather Forecast</h1>
            <div className="forecastpage">
                {listForecastElement()}
            </div>
        </div>
    );
};
export default WeatherForecast;
