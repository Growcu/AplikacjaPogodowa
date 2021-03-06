/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import env from 'react-dotenv';

import Card from './Card';
import alertHelper from '../helpers/alertHelper';
import { findWeather } from '../actions/FindWeatherActions';

import '../styles/FindWeather.css';

const FindWeather = () => {
    const dispatch = useDispatch();
    const findWeatherData = useSelector((store) => store.findWeather);
    const [cityInput, setCityInput] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeCity = (event) => setCityInput(event.target.value);

    const listCards = findWeatherData.map((item, index) => <Card data={item} key={index} />);

    const downloadData = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${env.API_KEY}`)
            .then((response) => {
                if (response.status === 200) {
                    const newCity = { city: cityInput };
                    dispatch(findWeather(newCity));
                    setIsVisible(true);
                }
            })
            .catch(() => {
                alertHelper('Ostrzeżenie!', 'To miasto nie istnieje', 'warning', 'Ok');
                setCityInput('');
            });
    };
    return (
        <div className="page">
            <h2 className="title-page">Szukaj Pogody</h2>
            <div className="find-container">
                <input type="text" value={cityInput} onChange={handleChangeCity} className="find-input" placeholder="Nazwa" />
                <button type="button" className="find-button" onClick={downloadData}>Szukaj</button>
            </div>
            <div className="find-weather-page">
                {isVisible ? listCards : null}
            </div>
        </div>
    );
};
export default FindWeather;
