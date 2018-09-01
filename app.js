'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');

routes(app);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log(`Server is running on PORT "${process.env.PORT || 3000}"`);
});

