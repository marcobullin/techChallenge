'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://mongodb:27017/techChallenge', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
    next();
});

routes(app);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log(`Server is running on PORT "${process.env.PORT || 3000}"`);
});

module.exports = app;