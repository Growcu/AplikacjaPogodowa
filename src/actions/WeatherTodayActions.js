export const SEARCH_CURRENT_WEATHER_INFO = 'SEARCHCURRENTWEATHERINFO';
export const SEARCH_POLLUTION_INFO = 'SEARCHPOLLUTIONINFO';

export const searchCurrentWeatherInfo = ({ latitude, longitude }) => ({
    type: SEARCH_CURRENT_WEATHER_INFO,
    payload: {
        latitude,
        longitude,
    },
});

export const searchPollutionInfo = ({ latitude, longitude }) => ({
    type: SEARCH_POLLUTION_INFO,
    payload: {
        latitude,
        longitude,
    },
});
