import { $display } from './app.js'
import { cityWeatherData } from './app.js'

class View {
    constructor() {}
    updateDisplay() {
        $display.empty();
        cityWeatherData.getFromLocalStorage();
        for (var i = 0; i < cityWeatherData.weatherResult.length; i++) {
            var template = Handlebars.compile($('#template').html())
            var newItem = template(cityWeatherData.weatherResult[i]);
            $('.display').append(newItem);
        }
    }
}
export { View }