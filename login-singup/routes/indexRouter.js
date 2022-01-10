const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/indexControllers');

router.get('/', indexControllers.getForm);
router.post('/', indexControllers.postFormData);
router.get('/login', indexControllers.getLogInform);
router.post('/login', indexControllers.postLoginForm);
router.post('/delete', indexControllers.deleteAccountPost);

module.exports = router;
