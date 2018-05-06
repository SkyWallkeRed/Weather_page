import { cityWeatherData } from './app.js'
var STORAGE_ID = 'Weather';

class Data {
    constructor() {
        this.weatherResult = this.getFromLocalStorage(); // ? ! ? 
    }
    renderWeatherData(data, $serchData) {
        let cityName = $serchData.toUpperCase();
        let currentTemp = data.query.results.channel.item.condition.temp
        let weatherDiscription = data.query.results.channel.item.condition.text
        return dataObj = {
            cityName: cityName,
            currentTemp: currentTemp,
            weatherDiscription: weatherDiscription
        }
    }
    removePost($clickedPost, index) {
        this.weatherResult.splice(index, 1);
        $clickedPost.remove();
    };
    createComment(text, weatherIndex) {
        let comment = { text: text };
        this.weatherResult[weatherIndex].weatherComments.push(comment);
    };
    saveToLocalStorage() {
        localStorage.setItem(STORAGE_ID, JSON.stringify(cityWeatherData.weatherResult));
    }
    getFromLocalStorage() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    }
}
export { Data }