const express = require('express');
const calcController = require('./controllers/calcController');

const router = express.Router();
router.use(express.json());

// GET route
router.post('/', calcController.calc);

module.exports = router;