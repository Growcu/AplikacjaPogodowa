const rounderValueHelper = (data) => {
    const {
        temp, pressure, humidity, speed, tempMax, tempMin,
    } = data;
    const toFloorValues = [
        temp,
        pressure,
        humidity,
        speed,
        tempMax,
        tempMin,
    ];
    const roundedValues = toFloorValues.map((value) => Math.floor(value));
    return roundedValues;
};
export default rounderValueHelper;
