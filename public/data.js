import { $display, weatherResult } from './app.js'
import { Weather } from './modle.js'
import { view } from './view.js'


class Data {
    constructor() {

    }
    addWeather(data, $serchData) {
        let cityName = $serchData.toUpperCase();
        let currentTemp = data.query.results.channel.item.condition.temp
        let weatherDiscription = data.query.results.channel.item.condition.text
            //
        let weatherData = new Weather(cityName, currentTemp, weatherDiscription);
        // console.log(weatherData);
        weatherResult.push(weatherData);
        view.updateDisplay();
    }
    removePost($clickedPost, index) {
        console.log($clickedPost + 'from remove func')
        console.log(index + 'from remove func')
        weatherResult.splice(index, 1);
        $clickedPost.remove();
        // saveToLocalStorage();
        view.updateDisplay();
    };
    createComment(text, weatherIndex) {
        let comment = { text: text };
        weatherResult[weatherIndex].weatherComments.push(comment);
        // saveToLocalStorage();
        view.updateDisplay();
    };


}
const data = new Data();
export { data }
export { Data }