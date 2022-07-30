const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;



// handlerbars (Template engine for Express)
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Carlos',
        titulo: 'Curso de Node'
    });
});

// Servir contenido estático
app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Carlos',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Carlos',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.send('404 - UPS!! Page not found...');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});