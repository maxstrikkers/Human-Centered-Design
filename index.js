const express = require('express');
const path = require('path');
const { Liquid } = require('liquidjs');
const app = express();

const { getClothesData } = require('./functies.js');

const engine = new Liquid({
    root: path.resolve(__dirname, 'views'),  // set templates location
    extname: '.liquid'  // set file extension
});

app.engine('liquid', engine.express()); // register liquid engine
app.set('views', path.resolve(__dirname, 'views')); // set views location
app.set('view engine', 'liquid'); // set liquid as the view engine

// Serveer statische bestanden uit de 'static' map
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', async function (req, res) {
    const clothesData = await getClothesData('kleding');
    res.render('index', { headerText: 'Kleding Matcher', kledingTypes: clothesData.kledingstukken});
});

app.get('/:kledingType', async function (req, res) {
    console.log(req.query)
    const clothesToMatchWith = await getClothesData('kledinDetails')
    console.log(clothesToMatchWith)
    res.render('kleding', { clothes: 'test' });
  });

// app.get('/kleding', async function (req, res) {
//     const clothesData = await getClothesData('kledingDetails');
//     res.render('kleding', { clothes: clothesData });
// });

app.listen(5500);
