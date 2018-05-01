require('./config/config.js');

const express = require('express');

const app = express();
const port = process.env.PORT;

const index = require('./routes/index');

app.use('/', index);

app.listen(port);

module.exports = { app };
