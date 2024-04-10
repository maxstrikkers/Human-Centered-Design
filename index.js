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
    const numberOfItems = clothesData.kledingstukken.length;
    res.render('index', { headerText: 'Kleding Matcher', kledingTypes: clothesData.kledingstukken, numberOfItems: numberOfItems});
});

app.get('/:kledingType', async function (req, res) {
    const clothesData = await getClothesData('kledingDetails')
    const clothesToMatchWith = clothesData.kledingDetails.filter(clothes => clothes.categorie === req.query.kledingstuk);
    const matchingClothes = clothesData.kledingDetails.filter(clothes => clothes.categorie === req.query.voorgesteldKledingstuk);

    res.render('kleding', {clothesToMatchWith: clothesToMatchWith, matchingClothes: matchingClothes, clothesToMatchWithType: req.query.kledingstuk, matchingClothesType: req.query.voorgesteldKledingstuk });
  });


app.listen(5500);
