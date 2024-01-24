const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/index');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', routes);

module.exports = app;
