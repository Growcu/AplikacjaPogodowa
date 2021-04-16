/* eslint-disable camelcase */
import axios from 'axios';

import { SEARCH_FORECAST } from '../actions/ForecastActions';

const ForecastPullDataMiddleware = () => (next) => async (action) => {
    const { type } = action;

    const configurePayload = (res) => {
        switch (type) {
        case SEARCH_FORECAST: {
            const { timezone_offset, daily } = res.data;
            action.payload = {
                timezone_offset,
                daily,
            };
        } break;
        default:
        }
    };

    switch (type) {
    case SEARCH_FORECAST: {
        const { latitude, longitude } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => configurePayload(response));
    } break;
    default:
    }
    next(action);
};
export default ForecastPullDataMiddleware;
