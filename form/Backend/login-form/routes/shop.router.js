const express = require('express');
const shopControllers = require('../controllers/shop.controllers');
const router = express.Router();

router.get('/', shopControllers.getFormPage);
router.post('/', shopControllers.formPostReq);

module.exports = router;
