const express = require('express');
const path = require('path');
const { Liquid } = require('liquidjs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const { getClothesData } = require('./functies.js');
const { type } = require('os');

const engine = new Liquid({
    root: path.resolve(__dirname, 'views'),  // set templates location
    extname: '.liquid'  // set file extension
});

app.engine('liquid', engine.express()); // register liquid engine
app.set('views', path.resolve(__dirname, 'views')); // set views location
app.set('view engine', 'liquid'); // set liquid as the view engine

// Serveer statische bestanden uit de 'static' map
app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async function (req, res) {
    const clothesData = await getClothesData('kleding');
    res.render('index', { headerText: 'Kleding Matcher', kledingTypes: clothesData.kledingstukken});
});

app.get('/match/:kledingstuk', async function (req, res) {
    let clothesData = await getClothesData('kledingDetails');
    clothesData = clothesData.kledingDetails.filter(item => item.categorie === req.params.kledingstuk);
    res.render('match', {headerText: 'Selecteer een kledingstuk',clothesToMatchWithType: req.params.kledingstuk, clothesToMatchWith: clothesData});
  });


app.get('/:kledingId', async function (req, res) {
    const clothesData = await getClothesData('kledingDetails');
    console.log(req.params.kledingId)
    const clothesThatFit = clothesData.kledingDetails.filter(item => item.pastBij.includes(req.params.kledingId));
    console.log(clothesThatFit);
    res.render('resultaat', {headerText:'De kledingstukken die goed passen bij wat jij hebt geselecteerd' ,matchingItems: clothesThatFit});
});

app.listen(5500);
