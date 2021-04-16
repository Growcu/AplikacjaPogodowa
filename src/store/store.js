import { applyMiddleware, createStore } from 'redux';
import middlewarePullingData from '../middlewares/middlewarePullingData';

import RootReducer from '../reducers/RootReducer';

const store = createStore(
    RootReducer,
    applyMiddleware(middlewarePullingData),
);

export default store;
