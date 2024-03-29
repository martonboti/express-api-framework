require('./config/config.js');
require('./config/mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

const index = require('./routes/index');

app.use(bodyParser.json());

app.use('/', index);

app.use((req, res) => {
  res.status(404).send({
    error: {
      message: '404 Not Found.',
      status_code: 404
    }
  });
});

app.listen(port);

module.exports = { app };
