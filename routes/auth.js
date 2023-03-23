const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/auth',authController.getAuth);

router.post('/signup', authController.postRegister);

module.exports = router;