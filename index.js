const express = require('express');
const path = require('path');
const { Liquid } = require('liquidjs');
const app = express();

const engine = new Liquid({
    root: path.resolve(__dirname, 'views'),  // set templates location
    extname: '.liquid'  // set file extension
});

app.engine('liquid', engine.express()); // register liquid engine
app.set('views', path.resolve(__dirname, 'views')); // set views location
app.set('view engine', 'liquid'); // set liquid as the view engine

app.get('/', function (req, res) {
    res.render('index', { message: 'Heeeellllo World' });
});

app.listen(5500);