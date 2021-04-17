import { applyMiddleware, createStore } from 'redux';

import findWeatherPullingData from '../middlewares/findWeatherPullingData';
import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(findWeatherPullingData),
);

export default store;
