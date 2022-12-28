const router = require('express').Router();

// Importing routing level middleware
const AuthRouter = require('./modules/auth/auth.router');

router.use('/auth', AuthRouter);

module.exports = router;