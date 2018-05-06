import { data } from './data.js'
import { api } from './api.js'
import { view } from './view.js'
let $display = $('.display');
export { $display }

data.getFromLocalStorage();
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
    // console.log($serchData)
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
    // console.log($clickedPost + 'from remove btn')
    // console.log(index + 'from remove btn')
    data.removePost($clickedPost, index);
    data.saveToLocalStorage()
    view.updateDisplay();
});
view.updateDisplay();