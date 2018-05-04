import { $display } from './app.js'
import { weatherResult } from './data.js'
import { data } from './data.js'
class View {
    constructor() {}
    updateDisplay() {
        $('.display').empty();
        data.getFromLocalStorage();
        for (var i = 0; i < weatherResult.length; i++) {
            var template = Handlebars.compile($('#template').html())
            var newItem = template(weatherResult[i]);
            $('.display').append(newItem);
        }
    }
}
const view = new View();
export { view }