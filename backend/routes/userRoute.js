const express = require('express');
const router = express.Router();

const { Signup, login } = require('../controllers/userController');

router.post('/Signup', Signup);
router.post('/login', login);

module.exports = router;