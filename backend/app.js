const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mealsRoutes = require('./routes/meals');

const app = express();

mongoose.connect('mongodb+srv://jerem:jerem@cluster0.t6iom.mongodb.net/cantiniere?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/meals', mealsRoutes)

module.exports = app;