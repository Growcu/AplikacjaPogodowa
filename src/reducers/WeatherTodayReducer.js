import { SEARCH_CURRENT_WEATHER_INFO, SEARCH_POLLUTION_INFO } from '../actions/WeatherTodayActions';

const defaultObject = {
    weather: {},
    airPollution: [],
};

const weatherTodayReducer = (state = defaultObject, action) => {
    const { type, payload } = action;
    switch (type) {
    case SEARCH_CURRENT_WEATHER_INFO: {
        const {
            city, temp, pressure, humidity, tempMax, tempMin, speed,
        } = payload;
        let { weather } = state;
        weather = {
            city,
            temp,
            pressure,
            humidity,
            tempMax,
            tempMin,
            speed,
        };
        return {
            weather,
            airPollution: state.airPollution,
        };
    }
    case SEARCH_POLLUTION_INFO: {
        const {
            co, no, no2, o3, so2, pm2, pm10, nh3,
        } = payload;
        let { airPollution } = state;
        airPollution = [{
            name: 'CO',
            uv: co,
        },
        {
            name: 'NO',
            uv: no,
        },
        {
            name: 'NO2',
            uv: no2,
        },
        {
            name: 'O3',
            uv: o3,
        },
        {
            name: 'SO2',
            uv: so2,
        },
        {
            name: 'PM2',
            uv: pm2,
        },
        {
            name: 'PM10',
            uv: pm10,
        },
        {
            name: 'NH3',
            uv: nh3,
        },
        ];
        return {
            weather: state.weather,
            airPollution,
        };
    }
    default:
        return state;
    }
};
export default weatherTodayReducer;
