var express = require('express');
var app = express();
app.listen(8000);

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.use(express.static('app_modules')); // need to be here? 

// var fetch = require('./fetch-ajax.js');

app.get('/', function(request, response) {
    response.send(console.log('server working'));
});