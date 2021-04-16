import { applyMiddleware, createStore } from 'redux';
import ForecastPullDataMiddleware from '../middlewares/ForecastPullDataMiddleware';

import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(ForecastPullDataMiddleware),
);

export default store;
