const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact_me', (req, res) => {
    res.render('contact_me');
});

app.get('/skill', (req, res) => {
    res.render('skill');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.listen(3000, () => {
    console.log('server started on port 3000!');
});


