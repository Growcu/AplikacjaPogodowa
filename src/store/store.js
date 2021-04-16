import { applyMiddleware, createStore } from 'redux';
import WeatherTodayPullDataMiddleware from '../middlewares/WeatherTodayPullDataMiddleware';
import ForecastPullDataMiddleware from '../middlewares/ForecastPullDataMiddleware';

import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(WeatherTodayPullDataMiddleware, ForecastPullDataMiddleware),
);

export default store;
