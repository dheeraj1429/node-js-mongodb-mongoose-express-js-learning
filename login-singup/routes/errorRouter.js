const express = require('express');
const router = express.Router();

const errorControllers = require('../controllers/errorControllers');

router.use(errorControllers.errorPage);

module.exports = router;
