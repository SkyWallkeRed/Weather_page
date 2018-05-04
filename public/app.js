console.log('js-on')

import { data } from './data.js'
import { Comment } from './modle.js'
import { api } from './api.js'
import { view } from './view.js'
let $display = $('.display');
export { $display }

data.getFromLocalStorage();
view.updateDisplay();


$('.searchWeather').on('click', function() {
    var $serchData = $('.userInput').val();
    console.log($serchData)
    api.fetch($serchData);
    $('.userInput').val("");
    data.saveToLocalStorage();
    view.updateDisplay();

});

$('.display').on('click', '.commentBtn', function() {
    console.log('click comment')
    var text = $(this).siblings('.commentInput').val();
    var weatherIndex = $(this).closest('.weatherDisplay').index();
    data.createComment(text, weatherIndex);
    // data.saveToLocalStorage();
    view.updateDisplay();
});

$('.display').on('click', '.removeResult', function() {
    var $clickedPost = $(this).closest('.weatherDisplay');
    var index = $clickedPost.index();
    console.log($clickedPost + 'from remove btn')
    console.log(index + 'from remove btn')
    data.removePost($clickedPost, index);
    data.saveToLocalStorage()
    view.updateDisplay();
});
view.updateDisplay();