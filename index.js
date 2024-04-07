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
    res.render('index', { headerText: 'Kleding Matcher'});
    console.log(req);
});

app.get('/:kledingType', (req, res) => {
    const kledingType = req.params.kledingType;
    console.log(kledingType);
    // Voer hier logica uit om de informatie over het gevraagde kledingType op te halen
    res.send(`Informatie over kledingtype: ${kledingType}`);
  });

app.get('/kleding', async function (req, res) {
    const clothesData = await getClothesData('kledingDetails');
    res.render('kleding', { clothes: clothesData });
});

app.listen(5500);
