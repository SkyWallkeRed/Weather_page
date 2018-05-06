class Weather {
    constructor(data, $serchData) {
        this.cityName = $serchData.toUpperCase();
        this.currentTemp = data.query.results.channel.item.condition.temp
        this.weatherDiscription = data.query.results.channel.item.condition.text
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