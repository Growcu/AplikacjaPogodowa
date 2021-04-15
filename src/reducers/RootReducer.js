import { combineReducers } from 'redux';

import findWeatherReducer from './FindWeatherReducer';

const RootReducer = combineReducers({
    findWeather: findWeatherReducer,
});

export default RootReducer;
