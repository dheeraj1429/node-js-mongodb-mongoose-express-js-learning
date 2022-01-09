const express = require('express');
const apidControllers = require('../controllers/indexControllers');

const router = express.Router();

router.get('/', apidControllers.apiData);

module.exports = router;
