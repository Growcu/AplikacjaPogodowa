export const SEARCH_FORECAST = 'SEARCHFORECAST';

export const searchForecast = ({ latitude, longitude }) => ({
    type: SEARCH_FORECAST,
    payload: {
        latitude,
        longitude,
    },
});
