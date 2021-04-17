import { applyMiddleware, createStore } from 'redux';

import findWeatherPullingDataMiddleware from '../middlewares/findWeatherPullDataMiddleware';
import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(findWeatherPullingDataMiddleware),
);

export default store;
