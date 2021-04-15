import { SEARCH_CURRENT_WEATHER_INFO, SEARCH_POLLUTION_INFO } from '../actions/WeatherTodayActions';

const defaultObject = {
    weather: {
        city: 'Pszczyna',
        temp: '29',
        pressure: '990',
        humidity: '20',
        tempMax: '40',
        tempMin: '25',
        speed: '0',
    },
    airPollution: [{
        name: 'CO',
        uv: 201,
    },
    {
        name: 'NO',
        uv: 20,
    },
    {
        name: 'NO2',
        uv: 300,
    },
    {
        name: 'O3',
        uv: 100,
    },
    {
        name: 'SO3',
        uv: 150,
    },
    {
        name: 'PM2',
        uv: 250,
    },
    {
        name: 'PM10',
        uv: 90,
    },
    {
        name: 'NH3',
        uv: 40,
    },
    ],
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
