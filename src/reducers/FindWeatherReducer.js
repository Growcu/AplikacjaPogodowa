import { FIND_WEATHER } from '../actions/FindWeatherActions';

const defaultObject = {
    city: 'Krakow',
    temp: '23',
    pressure: '1030',
    humidity: '35',
    tempMax: '32',
    tempMin: '18',
    speed: '2',
    icon: '11d',
};

const findWeatherReducer = (state = defaultObject, action) => {
    const { type, payload } = action;
    switch (type) {
    case FIND_WEATHER: {
        const {
            city, temp, pressure, humidity, icon, tempMax, tempMin, speed,
        } = payload;
        return {
            city, temp, pressure, humidity, icon, tempMax, tempMin, speed,
        };
    }
    default:
        return state;
    }
};
export default findWeatherReducer;
