import { applyMiddleware, createStore } from 'redux';
import WeatherTodayPullDataMiddleware from '../middlewares/WeatherTodayPullDataMiddleware';

import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(WeatherTodayPullDataMiddleware),
);

export default store;
