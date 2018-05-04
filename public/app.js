console.log('js-on')

//imports
import { Weather } from './modle.js'
import { data } from './data.js'
import { Comment } from './modle.js'
import { api } from './api.js'
import { view } from './view.js'
let weatherResult = [];
let $display = $('.display');
export { $display, weatherResult }





// var STORAGE_ID = 'GetWeather';
// var saveToLocalStorage = function() {
//     localStorage.setItem(STORAGE_ID, JSON.stringify(weatherResult));
// }
// var getFromLocalStorage = function() {
//     return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
// }




// updateDisplay();

$('.display').on('click', '.commentBtn', function() {
    console.log('click comment')
    var text = $(this).siblings('.commentInput').val();
    var weatherIndex = $(this).closest('.weatherDisplay').index();
    data.createComment(text, weatherIndex);
});

$('.searchWeather').on('click', function() {
    var $serchData = $('.userInput').val();
    console.log($serchData)
    api.fetch($serchData);
    $('.userInput').val("");
})

$('.display').on('click', '.removeResult', function() {
    var $clickedPost = $(this).closest('.weatherDisplay');
    var index = $clickedPost.index();
    console.log($clickedPost + 'from remove btn')
    console.log(index + 'from remove btn')
    data.removePost($clickedPost, index);
});