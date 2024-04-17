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
    const numberOfItems = clothesData.kledingstukken.length;
    res.render('index', { headerText: 'Kleding Matcher', kledingTypes: clothesData.kledingstukken, numberOfItems: numberOfItems});
});

app.get('/kledingOmTeMatchen1', async function (req, res) {
    const clothesData = await getClothesData('kledingDetails');
    res.cookie('kledingstuk', req.query.kledingstuk);
    res.cookie('voorgesteldKledingstuk', req.query.voorgesteldKledingstuk);
    const kledingstuk = req.query.kledingstuk.split(' ')[0];
    const clothesToMatchWith = clothesData.kledingDetails.filter(clothes => clothes.categorie === kledingstuk);
    res.render('kleding1', {clothesToMatchWith: clothesToMatchWith, clothesToMatchWithType: req.query.kledingstuk });
  });


app.get('/kledingOmTeMatchen2', async function (req, res) {
    const clothesData = await getClothesData('kledingDetails');
    // const typeToMatch = clothesData.kledingDetails.filter(clothes => clothes.categorie === req.cookies.voorgesteldKledingstuk);
    // console.log(req.cookies.voorgesteldKledingstuk)
    // const recommendedClothes = typeToMatch.filter(clothes => pastBijList.some(item => clothes.pastBij.includes(item)));
    res.render('kleding2', {clothesToMatchWith: 'test' });
});

app.listen(5500);
