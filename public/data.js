import { $display } from './app.js'
import { Weather } from './modle.js'
import { view } from './view.js'
var STORAGE_ID = 'GetWeather';



// var weatherResult ;

class Data {
    constructor() {
        // this.weatherResult = this.getFromLocalStorage();
    }
    addWeather(data, $serchData) {
        let cityName = $serchData.toUpperCase();
        let currentTemp = data.query.results.channel.item.condition.temp
        let weatherDiscription = data.query.results.channel.item.condition.text
            //
        let weatherData = new Weather(cityName, currentTemp, weatherDiscription);
        // console.log(weatherData);
        weatherResult.push(weatherData);
        this.saveToLocalStorage();
        view.updateDisplay();

    }
    removePost($clickedPost, index) {
        console.log($clickedPost + 'from remove func')
        console.log(index + 'from remove func')
        weatherResult.splice(index, 1);
        $clickedPost.remove();
        this.saveToLocalStorage();
        view.updateDisplay();
    };
    createComment(text, weatherIndex) {
        let comment = { text: text };
        weatherResult[weatherIndex].weatherComments.push(comment);
        this.saveToLocalStorage();
        view.updateDisplay();
    };

    saveToLocalStorage() {
        localStorage.setItem(STORAGE_ID, JSON.stringify(weatherResult));
    }
    getFromLocalStorage() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    }


}
const data = new Data();
let weatherResult = data.getFromLocalStorage();
export { data }
export { Data }
export { weatherResult }