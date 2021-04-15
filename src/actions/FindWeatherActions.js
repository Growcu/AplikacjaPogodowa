export const FIND_WEATHER = 'FINDWEATHER';

export const findWeather = ({ city }) => ({
    type: FIND_WEATHER,
    payload: {
        city,
    },
});
