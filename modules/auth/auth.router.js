const router = require('express').Router();

const authController = require('./auth.controller');

router.route('/register')
    .post(authController.insert);

module.exports = router;