const express = require('express');
const routes = require('./src/routes/index');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', routes);

module.exports = app;
