/* eslint-disable camelcase */
import axios from 'axios';

import { SEARCH_CURRENT_WEATHER_INFO, SEARCH_POLLUTION_INFO } from '../actions/WeatherTodayActions';

const WeatherTodayPullDataMiddleware = () => (next) => async (action) => {
    const { type } = action;
    const configurePayload = (res) => {
        switch (type) {
        case SEARCH_CURRENT_WEATHER_INFO: {
            const { main, wind, name } = res.data;
            const {
                temp, pressure, humidity, temp_max, temp_min,
            } = main;
            const { speed } = wind;
            action.payload = {
                city: name,
                tempMax: temp_max,
                tempMin: temp_min,
                temp,
                pressure,
                humidity,
                speed,
            };
        } break;
        case SEARCH_POLLUTION_INFO: {
            const {
                co, no2, o3, so2, pm2, pm10,
            } = res.data.list[0].components;
            action.payload = {
                co,
                no2,
                o3,
                so2,
                pm2,
                pm10,
            };
        } break;
        default:
        }
    };

    switch (type) {
    case SEARCH_CURRENT_WEATHER_INFO: {
        const { latitude, longitude } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => configurePayload(response));
    } break;
    case SEARCH_POLLUTION_INFO: {
        const { latitude, longitude } = action.payload;
        await axios
            .get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => configurePayload(response));
    } break;
    default:
    }
    next(action);
};
export default WeatherTodayPullDataMiddleware;
