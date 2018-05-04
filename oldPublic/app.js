console.log('js-on')

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

let fetch = function($serchData) {
    var city = $serchData;
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
        city + "') and u='c'"
    $.ajax({
        method: "GET",
        url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json"
    }).then(function(data) {
        addWeather(data, $serchData)
            // $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
    });
}

// find Search Data the respond from the API data 
function addWeather(data, $serchData) {
    console.log(data);
    let cityName = $serchData.toUpperCase();
    let currentTemp = data.query.results.channel.item.condition.temp
    let weatherDiscription = data.query.results.channel.item.condition.text

    let weatherData = new Wather(cityName, currentTemp, weatherDiscription);
    console.log(weatherData);
    weatherResult.push(weatherData);
    saveToLocalStorage();
    console.log(weatherResult)
    updateDisplay();
}

class Wather {
    constructor(cityName, currentTemp, weatherDiscription) {
        this.cityName = cityName;
        this.currentTemp = currentTemp;
        this.weatherDiscription = weatherDiscription;
        this.weatherComments = [];
    }
}

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