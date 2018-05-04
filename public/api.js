import { Data } from './data.js'

class Api {

    constructor() {

    }



    fetch($serchData) {
        var city = $serchData;
        var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
            city + "') and u='c'"
        $.ajax({
            method: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json"
        }).then(function(data) {
            let newCity = new Data()
            newCity.addWeather(data, $serchData)
                // $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
        });
    }


}
const api = new Api();

export { api }