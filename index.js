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
    const clothesToMatchWith = clothesData.kledingDetails.filter(clothes => clothes.categorie === req.query.kledingstuk);
    const matchingClothes = clothesData.kledingDetails.filter(clothes => clothes.categorie === req.query.voorgesteldKledingstuk);
    res.render('kleding1', {clothesToMatchWith: clothesToMatchWith, matchingClothes: matchingClothes, clothesToMatchWithType: req.query.kledingstuk, matchingClothesType: req.query.voorgesteldKledingstuk });
  });


app.get('/kledingOmTeMatchen2', async function (req, res) {
    const clothesData = await getClothesData('kledingDetails');
    const pastBijText = req.query.kledingstuk;
    const pastBijList = pastBijText.split(/(?<=\d)(?=\D)/);
    const typeToMatch = clothesData.kledingDetails.filter(clothes => clothes.categorie === req.cookies.voorgesteldKledingstuk);
    const recommendedClothes = typeToMatch.filter(clothes => pastBijList.some(item => clothes.pastBij.includes(item)));
    console.log(recommendedClothes);
    res.render('kleding2', {clothesToMatchWith: 'test' });
});

app.listen(5500);
