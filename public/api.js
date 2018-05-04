import { Data } from './data.js'
class Api {
    constructor() {}
    fetch($serchData) {
        var city = $serchData;
        var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
            city + "') and u='c'"
        return $.ajax({
            method: "GET",
            url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json"
        }).then(function(data) {
            let newCity = new Data()
            newCity.addWeather(data, $serchData)
        }).catch(function() {
            alert('enter a vald city name')
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1506631610770-2e3eeae401b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5dc54d8183138e4763a3e4a19b5dd6c&auto=format&fit=crop&w=1502&q=80)');
        })
    }
}
const api = new Api();
export { api }