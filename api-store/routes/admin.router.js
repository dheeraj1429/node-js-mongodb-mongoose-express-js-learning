const express = require('express');
const adminControllers = require('../controllers/adminControllers');

const router = express.Router();

router.get('/', adminControllers.getForm);
router.post('/', adminControllers.postFormData);

module.exports = router;
