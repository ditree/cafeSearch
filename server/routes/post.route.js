
const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/param-validation');
const postCtrl = require('../controllers/post.controller');

const router = express.Router();

router.route('/')
    .get(postCtrl.list)
    .post(validate(paramValidation.createPost), postCtrl.create);

router.route('/:postId')
    .get(postCtrl.get)
    .delete(validate(paramValidation.deletePost), postCtrl.remove);

//router.param('postId', postCtrl.load);

module.exports = router;
