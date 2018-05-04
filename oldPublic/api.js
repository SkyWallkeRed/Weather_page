// // wrap in a class 
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
            // console.log($serchData + '$serchData')
            // console.log(data)
            //creat data OBJ 
            let cityName = $serchData.toUpperCase();
            let currentTemp = data.query.results.channel.item.condition.temp
            let weatherDiscription = data.query.results.channel.item.condition.text
                // console.log('hi')
            let obj = {
                    cityName: cityName,
                    currentTemp: currentTemp,
                    weatherDiscription: weatherDiscription
                }
                // console.log(obj)
                // send obj to data.js 

            // $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
        });
    }
}
export { weatherApi }




// const new ajax
// const weatherApi = new WeatherApi()
// console.log(test)
// weatherApi.fetch('nyc')
//export weather API


//UNIT_TEST PASS