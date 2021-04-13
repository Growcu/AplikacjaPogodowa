import React, { useState } from 'react';

import Card from './Card';

import '../styles/FindWeather.css';

const FindWeather = () => {
    const [isVisble, setIsVisible] = useState(false);

    const handleSetIsVisible = () => setIsVisible(!isVisble);

    return (
        <div className="find-weather-page">
            <h2 className="title-page">Find Weather</h2>
            <div className="find-container">
                <input type="text" className="find-input" placeholder="Name" />
                <button type="button" className="find-button" onClick={handleSetIsVisible}>Find</button>
            </div>
            {isVisble ? <Card /> : null}
        </div>
    );
};
export default FindWeather;
