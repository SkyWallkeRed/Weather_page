// main JS file will replace old APP.js 
import { apiInc } from './api.js'
import { City } from './city.js'
import { Data } from './data.js'

$('.btn').on('click', function() {
    let input = $('.input').val();
    apiInc.fetch(input);
})