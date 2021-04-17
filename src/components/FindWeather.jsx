import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Card from './Card';
import alertHelper from '../helpers/alertHelper';
import { findWeather } from '../actions/FindWeatherActions';

import '../styles/FindWeather.css';

const FindWeather = () => {
    const dispatch = useDispatch();
    const [cityInput, setCityInput] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeCity = (event) => setCityInput(event.target.value);

    const downloadData = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => {
                if (response.status === 200) {
                    const newCity = { city: cityInput };
                    dispatch(findWeather(newCity));
                    setIsVisible(true);
                }
            })
            .catch(() => {
                alertHelper('Warning!', 'This city is not exist', 'warning', 'Ok');
                setCityInput('');
            });
    };
    return (
        <div className="page">
            <h2 className="title-page">Find Weather</h2>
            <div className="find-container">
                <input type="text" value={cityInput} onChange={handleChangeCity} className="find-input" placeholder="Name" />
                <button type="button" className="find-button" onClick={downloadData}>Find</button>
            </div>
            <div className="find-weather-page">
                {isVisible ? <Card /> : null}
            </div>
        </div>
    );
};
export default FindWeather;
