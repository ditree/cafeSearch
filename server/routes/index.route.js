const express = require('express');
const userRoutes = require ('./user.route');
const authRoutes = require('./auth.route');
const cafeRoutes = require('./cafe.route');

const router = express.Router();

router.get('/test', (req, res) => 
    res.send('API works')
);

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/cafe', cafeRoutes);
module.exports = router;
