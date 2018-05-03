import { WeatherView } from './weather_class.js';
var test = new WeatherView();
console.log(test.addWeather)
let fetch = function($serchData) {
    var city = $serchData;
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
        city + "') and u='c'"
    $.ajax({
        method: "GET",
        url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json"
    }).then(function(data) {
        WeatherView.addWeather(data, $serchData)
            // $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
    });
}

// var test = 'he';
// export { fetch }
export { fetch }