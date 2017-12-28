const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/param-validation');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
    .post(validate(paramValidation.createUser), userCtrl.create);

router.route('/:userId')
    .get(userCtrl.get);
// load user when API with userId route parameter is hit
//router.param('userId', userCtrl.load);

module.exports =  router;
