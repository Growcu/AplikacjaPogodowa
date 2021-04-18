/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import axios from 'axios';
import env from 'react-dotenv';

import { FIND_WEATHER } from '../actions/FindWeatherActions';

const findWeatherPullingDataMiddleware = () => (next) => async (action) => {
    const { type } = action;

    const configurePayaload = (res) => {
        switch (type) {
        case FIND_WEATHER: {
            const {
                main, weather, wind, name,
            } = res.data;
            const {
                temp, pressure, humidity, temp_max, temp_min,
            } = main;
            const { speed } = wind;
            const { icon } = weather[0];
            action.payload = {
                city: name,
                tempMax: temp_max,
                tempMin: temp_min,
                icon,
                temp,
                pressure,
                humidity,
                speed,
            };
        } break;
        default:
        }
    };

    switch (type) {
    case FIND_WEATHER: {
        const { city } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${env.API_KEY}`)
            .then((response) => configurePayaload(response));
    } break;
    default:
    }

    next(action);
};
export default findWeatherPullingDataMiddleware;
