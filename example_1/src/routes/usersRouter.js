const express = require('express');

const router = express.Router();
const { usersController } = require('../controllers/index');
const { Saludar, CrearSaludo } = usersController;

router.get('/', Saludar);
router.post('/:id', CrearSaludo);

module.exports = router;
