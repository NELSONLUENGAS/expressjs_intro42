const express = require('express');
const { usersController } = require('../controllers/index');
const { getAllUsers, createUser, updateUser } = usersController;

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/create', createUser);
router.put('/update/:idUser', updateUser);

module.exports = router;
