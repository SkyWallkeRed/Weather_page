import { Data } from './data.js'
import { Api } from './api.js'
import { View } from './view.js'
import { Weather } from './model.js'
import { Comment } from './model.js'
let $display = $('.display');
export { $display }
let weatherApi = new Api("https://query.yahooapis.com/v1/public/yql?q=")
let cityWeatherData = new Data()
let view = new View();

cityWeatherData.getFromLocalStorage();
view.updateDisplay();

$('form').submit(function(ev) {
    ev.preventDefault();

});

$(".userInput").on('keyup', function(event) {
    if (event.keyCode == 13) {
        $(".searchWeather").trigger('click');
    } else {
        event.preventDefault();
        return false;
    }
});

$('.searchWeather').on('click', function() {
    var $serchData = $('.userInput').val();
    weatherApi.fetch($serchData).then(function(data) {
        let cityWeather = new Weather(data, $serchData)
        cityWeatherData.weatherResult.push(cityWeather)
        console.log(cityWeatherData.weatherResult)
        cityWeatherData.saveToLocalStorage();
        view.updateDisplay();
    }).catch(function() {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1506631610770-2e3eeae401b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5dc54d8183138e4763a3e4a19b5dd6c&auto=format&fit=crop&w=1502&q=80)');
        alert('enter a vald city name')
    })
    $('.userInput').val("");

    cityWeatherData.saveToLocalStorage();
    view.updateDisplay();
});

export { cityWeatherData }

$('.display').on('click', '.commentBtn', function() {
    console.log('click comment')
    var text = $(this).siblings('.commentInput').val();
    var weatherIndex = $(this).closest('.weatherDisplay').index();
    cityWeatherData.createComment(text, weatherIndex);
    cityWeatherData.saveToLocalStorage();
    view.updateDisplay();
});

$('.display').on('click', '.removeResult', function() {
    var $clickedPost = $(this).closest('.weatherDisplay');
    var index = $clickedPost.index();

    cityWeatherData.removePost($clickedPost, index);
    cityWeatherData.saveToLocalStorage()
    view.updateDisplay();
});
view.updateDisplay();