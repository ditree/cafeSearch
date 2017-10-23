
const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/param-validation');
const cafeCtrl = require('../controllers/cafe.controller');

const router = express.Router();

router.route('/')
    .get(cafeCtrl.list)
    .post(validate(paramValidation.createCafe), cafeCtrl.create);

router.route('/:cafeId')
    .get(cafeCtrl.get)
    .put(validate(paramValidation.updateCafe), cafeCtrl.update)
    .delete(cafeCtrl.remove);

router.param('cafeId', cafeCtrl.load);

module.exports = router;
