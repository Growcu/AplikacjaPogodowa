/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { searchForecast } from '../actions/ForecastActions';

import ForecastElement from './ForecastElement';
import alertHelper from '../helpers/alertHelper';

import '../styles/WeatherForecast.css';

const WeatherForecast = () => {
    const dispatch = useDispatch();
    const forecastData = useSelector((store) => store.forecast);
    const history = useHistory();

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(searchForecast(currentLocation));
            }, () => {
                alertHelper('Oops!', 'Nie możemy teraz pobrać Twojej lokalizacji', 'error', 'Ok');
                history.push('/');
            });
        } else {
            alertHelper('Oops!', 'Nie mamy możliwości pobrania Twojej lokalizacji', 'error', 'Ok');
            history.push('/');
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
            <h1 className="title-page">Prognoza Pogody</h1>
            <div className="forecastpage">
                {listForecastElement()}
            </div>
        </div>
    );
};
export default WeatherForecast;
