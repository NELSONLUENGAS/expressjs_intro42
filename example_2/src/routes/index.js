const express = require('express');
const usersRouter = require('./usersRouter');

const router = express.Router();

// middlewares
router.use('/users', usersRouter);

module.exports = router;
