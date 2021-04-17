import { applyMiddleware, createStore } from 'redux';

import WeatherTodayPullDataMiddleware from '../middlewares/WeatherTodayPullDataMiddleware';
import ForecastPullDataMiddleware from '../middlewares/ForecastPullDataMiddleware';
import findWeatherPullingDataMiddleware from '../middlewares/findWeatherPullDataMiddleware';

import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(
        WeatherTodayPullDataMiddleware,
        ForecastPullDataMiddleware,
        findWeatherPullingDataMiddleware,
    ),
);

export default store;
