// // wrap in a class 

import { City } from './city.js'
import { Data } from './data.js'
class WeatherApi {
    constructor() {

    }
    fetch($serchData) {
        var city = $serchData;
        var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
            city + "') and u='c'"
        return $.ajax({
            method: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json"
        }).then(function(data) {
            let cityName = $serchData.toUpperCase();
            let currentTemp = data.query.results.channel.item.condition.temp
            let weatherDiscription = data.query.results.channel.item.condition.text

            let cityWeather = new City(cityName, currentTemp, weatherDiscription)
            cityWeather.console()
        });
    }
}

const apiInc = new WeatherApi()

export { apiInc }