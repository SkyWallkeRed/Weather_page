//ajax
import { fetch } from './app_modules/fetch-ajax.js';

var STORAGE_ID = 'GetWeather';
var saveToLocalStorage = function() {
    localStorage.setItem(STORAGE_ID, JSON.stringify(weatherResult));
}
var getFromLocalStorage = function() {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}

let $display = $('.display');
let weatherResult = getFromLocalStorage();
// on click for the serch 
$('.searchWeather').on('click', function() {
    var $serchData = $('.userInput').val();
    console.log($serchData)
    fetch($serchData);
    $('.userInput').val("");
})

$('.display').on('click', '.removeResult', function() {
    var $clickedPost = $(this).closest('.weatherDisplay');
    var index = $clickedPost.index();
    console.log($clickedPost + 'from remove btn')
    console.log(index + 'from remove btn')
    removePost($clickedPost, index);
});

function removePost($clickedPost, index) {
    console.log($clickedPost + 'from remove func')
    console.log(index + 'from remove func')
    weatherResult.splice(index, 1);
    $clickedPost.remove();
    saveToLocalStorage();
    updateDisplay();
};


// find Search Data the respond from the API data 
// function addWeather(data, $serchData) {
//     // console.log(data);
//     let $serchData = $serchData;
//     let data = data;
//     let cityName = $serchData.toUpperCase();
//     let currentTemp = data.query.results.channel.item.condition.temp
//     let weatherDiscription = data.query.results.channel.item.condition.text
//         //
//     let weatherData = new WatherView(cityName, currentTemp, weatherDiscription, data);
//     // console.log(weatherData);
//     weatherResult.push(weatherData);
//     saveToLocalStorage();
//     console.log(weatherResult)
//     updateDisplay();
// }

// class WatherView {
//     constructor(cityName, currentTemp, weatherDiscription) {
//         this.cityName = cityName;
//         this.currentTemp = currentTemp;
//         this.weatherDiscription = weatherDiscription;
//         this.weatherComments = [];
//         this.data = data;
//         this.$serchData = cityName;
//     }
//     addWeather(data, $serchData) {
//         // console.log(data);
//         let $serchData = $serchData;
//         let data = data;
//         let cityName = $serchData.toUpperCase();
//         let currentTemp = data.query.results.channel.item.condition.temp
//         let weatherDiscription = data.query.results.channel.item.condition.text
//             //
//         let weatherData = new WeatherView(cityName, currentTemp, weatherDiscription, data);
//         // console.log(weatherData);
//         weatherResult.push(weatherData);
//         saveToLocalStorage();
//         console.log(weatherResult)
//         updateDisplay();
//     }


// }

class Comment {
    constructor(comment) {
        this.comment = comment;
    }
}

$('.display').on('click', '.commentBtn', function() {
    console.log('click comment')
    var text = $(this).siblings('.commentInput').val();
    var weatherIndex = $(this).closest('.weatherDisplay').index();
    createComment(text, weatherIndex);
});

function createComment(text, weatherIndex) {
    let comment = { text: text };
    weatherResult[weatherIndex].weatherComments.push(comment);
    saveToLocalStorage();
    updateDisplay();
};

var updateDisplay = function() {
    $('.display').empty();
    getFromLocalStorage();
    for (var i = 0; i < weatherResult.length; i++) {
        var template = Handlebars.compile($('#template').html())
        var newItem = template(weatherResult[i]);
        $('.display').append(newItem);
    }
}
updateDisplay();