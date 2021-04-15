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
        const forecast = payload;
        return forecast;
    }
    default:
        return state;
    }
};
export default forecastReducer;
