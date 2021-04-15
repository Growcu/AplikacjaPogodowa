import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { findWeather } from '../actions/FindWeatherActions';
import Card from './Card';

import '../styles/FindWeather.css';

const FindWeather = () => {
    const dispatch = useDispatch();
    const [cityInput, setCityInput] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeCity = (event) => setCityInput(event.target.value);

    const downloadData = () => {
        const newCity = { city: cityInput };
        dispatch(findWeather(newCity));
        setIsVisible(true);
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
