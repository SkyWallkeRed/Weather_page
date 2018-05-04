import { $display } from './app.js'
import { Weather } from './modle.js'
import { view } from './view.js'
var STORAGE_ID = 'GetWeather';

class Data {
    constructor() {
        // this.weatherResult = this.getFromLocalStorage();
    }
    addWeather(data, $serchData) {
        let cityName = $serchData.toUpperCase();
        let currentTemp = data.query.results.channel.item.condition.temp
        let weatherDiscription = data.query.results.channel.item.condition.text
            //
        if (weatherDiscription == 'Cloudy') {
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1522060532265-30b8e7694c06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=332380f5afb1e8767dadcc4c334fd6f8&auto=format&fit=crop&w=1296&q=80)');
        } else if (weatherDiscription == 'Partly Cloudy') {
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1519886047039-7c2219938794?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e15f9cd98ecf8f6492af3aa4570c169&auto=format&fit=crop&w=1228&q=80)');
        } else if (weatherDiscription == 'Sunny') {
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1495171852069-0e02de3ec89a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a999fc4aa680f90582493d6c9d3f7351&auto=format&fit=crop&w=1630&q=80)');
        } else if (weatherDiscription == 'Mostly Clear') {
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?ixlib=rb-0.3.5&s=cc359049551174327fc371a839464444&auto=format&fit=crop&w=1500&q=80)');
        }
        //

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