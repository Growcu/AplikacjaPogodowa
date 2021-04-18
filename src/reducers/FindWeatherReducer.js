import { FIND_WEATHER } from '../actions/FindWeatherActions';

const defaultObject = [];

const findWeatherReducer = (state = defaultObject, action) => {
    const { type, payload } = action;
    switch (type) {
    case FIND_WEATHER: {
        const {
            city, temp, pressure, humidity, icon, tempMax, tempMin, speed,
        } = payload;
        const newCity = {
            city, temp, pressure, humidity, icon, tempMax, tempMin, speed,
        };
        return [newCity, ...state];
    }
    default:
        return state;
    }
};
export default findWeatherReducer;
