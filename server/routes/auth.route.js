const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/param-validation');
const authCtrl = require('../controllers/auth.controller');

 
// const expressJwt = require('express-jwt');
// const config = require('../config/config');

const router = express.Router();

// POST /api/auth/login - Returns token if correct username and password
router.route('/login')
    .post(validate(paramValidation.login), authCtrl.login);

// GET /api/auth/random-number - Authorization: Bearer {token}
/*router.route('/random-number')
    .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);
    */

module.exports = router;
