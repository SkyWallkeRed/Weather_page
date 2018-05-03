class WeatherView {
    constructor(cityName, currentTemp, weatherDiscription) {
        this.cityName = cityName;
        this.currentTemp = currentTemp;
        this.weatherDiscription = weatherDiscription;
        this.weatherComments = [];
        // this.data = data;
        this.$serchData = cityName;
    }
    addWeather(data, $serchData) {
        // console.log(data);
        // let $serchData = $serchData;
        // let data = data;
        let cityName = $serchData.toUpperCase();
        let currentTemp = data.query.results.channel.item.condition.temp
        let weatherDiscription = data.query.results.channel.item.condition.text
            //
        let weatherData = new WeatherView(cityName, currentTemp, weatherDiscription, data);
        // console.log(weatherData);
        weatherResult.push(weatherData);
        saveToLocalStorage();
        console.log(weatherResult)
        updateDisplay();
    }


}


export { WeatherView }