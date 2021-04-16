/* eslint-disable array-callback-return */
import { SEARCH_FORECAST } from '../actions/ForecastActions';

const defaultObject = [
    {
        temp: '23',
        pressure: '1090',
        humidity: '50',
        wind: '10',
        max: '29',
        min: '20',
    },
    {
        temp: '23',
        pressure: '1090',
        humidity: '30',
        wind: '10',
        max: '29',
        min: '20',
    },
    {
        temp: '23',
        pressure: '1090',
        humidity: '30',
        wind: '10',
        max: '29',
        min: '20',
    },
    {
        temp: '23',
        pressure: '1090',
        humidity: '30',
        wind: '10',
        max: '29',
        min: '20',
    },
];
const forecastReducer = (state = defaultObject, action) => {
    const { type, payload } = action;
    switch (type) {
    case SEARCH_FORECAST: {
        const { daily } = payload;

        const onlyFourDays = daily.filter((item, index) => index < 4);

        const forecast = onlyFourDays.map((item) => (
            {
                temp: item.temp.day,
                tempMax: item.temp.max,
                tempMin: item.temp.min,
                pressure: item.pressure,
                humidity: item.humidity,
                wind: item.wind_speed,
            }
        ));
        return forecast;
    }
    default:
        return state;
    }
};
export default forecastReducer;
