import { $display, weatherResult } from './app.js'

class View {
    constructor() {

    }



    updateDisplay() {
        $('.display').empty();
        // getFromLocalStorage();
        for (var i = 0; i < weatherResult.length; i++) {
            var template = Handlebars.compile($('#template').html())
            var newItem = template(weatherResult[i]);
            $('.display').append(newItem);
        }
    }


}
const view = new View();

export { view }