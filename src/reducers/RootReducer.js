import { combineReducers } from 'redux';

import findWeatherReducer from './FindWeatherReducer';
import forecastReducer from './ForecastReducer';
import weatherTodayReducer from './WeatherTodayReducer';

const RootReducer = combineReducers({
    findWeather: findWeatherReducer,
    weatherToday: weatherTodayReducer,
    forecast: forecastReducer,
});

export default RootReducer;
