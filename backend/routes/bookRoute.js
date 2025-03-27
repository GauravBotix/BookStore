
const express = require('express');
const router = express.Router();

const getBook = require('../controllers/bookController');

router.get('/', getBook);

module.exports = router;