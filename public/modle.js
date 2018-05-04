class Weather {
    constructor(cityName, currentTemp, weatherDiscription) {
        this.cityName = cityName;
        this.currentTemp = currentTemp;
        this.weatherDiscription = weatherDiscription;
        this.weatherComments = [];
    }
}
class Comment {
    constructor(comment) {
        this.comment = comment;
    }
}
export { Weather }
export { Comment }