/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
import { SEARCH_FORECAST } from '../actions/ForecastActions';

import timeConverterHelper from '../helpers/timeConverterHelper';

const defaultObject = [];

const forecastReducer = (state = defaultObject, action) => {
    const { type, payload } = action;
    switch (type) {
    case SEARCH_FORECAST: {
        const { daily, timezone_offset } = payload;

        const onlyFourDays = daily.filter((item, index) => index < 4);

        const forecast = onlyFourDays.map((item) => {
            const {
                dt, temp, pressure, humidity, wind_speed,
            } = item;
            const date = timeConverterHelper(dt, timezone_offset);
            return {
                temp: temp.day,
                tempMax: temp.max,
                tempMin: temp.min,
                wind: wind_speed,
                pressure,
                humidity,
                date,
            };
        });
        return forecast;
    }
    default:
        return state;
    }
};
export default forecastReducer;
