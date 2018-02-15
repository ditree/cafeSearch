const express = require('express');

// const userRoutes = require ('./user.route');
const authRoutes = require('./auth.route');
const cafeRoutes = require('./cafe.route');
const postRoutes = require('./post.route');

const router = express.Router();
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    // console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/test', (req, res) => 
    res.send('API works')
);

// router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/cafes', cafeRoutes);
router.use('/posts', postRoutes);
module.exports = router;
