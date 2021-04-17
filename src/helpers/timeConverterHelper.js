const timeConverterHelper = (time, timezone) => {
    const timeInMiliseconds = (time + timezone) * 1000;
    const currentTime = new Date(timeInMiliseconds);

    const day = currentTime.getUTCDate() <= 9 ? `0${currentTime.getUTCDate()}` : currentTime.getUTCDate();
    const month = currentTime.getUTCMonth() <= 9 ? `0${currentTime.getUTCMonth()}` : currentTime.getUTCMonth();

    return `${day}.${month}`;
};
export default timeConverterHelper;
