import { combineReducers } from 'redux';

import findWeatherReducer from './FindWeatherReducer';
import weatherTodayReducer from './WeatherTodayReducer';

const RootReducer = combineReducers({
    findWeather: findWeatherReducer,
    weatherToday: weatherTodayReducer,
});

export default RootReducer;
