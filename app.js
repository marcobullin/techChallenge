'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://mongodb:27017/techChallenge', { useNewUrlParser: true });

app.use(bodyParser.json());

routes(app);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log(`Server is running on PORT "${process.env.PORT || 3000}"`);
});

