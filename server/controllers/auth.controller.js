
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const config = require('../config/config');

//const jwt = require('jsonwebtoken');
const user = {
    username: 'admin',
    password: 'express'
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function login(req, res, next) {
    if (req.body.username === user.name && req.body.password == user.password) {
        const token = 'token';/*jwt.sign({
            username: user.username
        }, config.jwtSecret);*/
        return res.json({
            token,
            username: user.username
        });
    }

    const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
    return next(err);
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function getRandomNumber(req, res) {
    return res.json({
        user: req.user,
        num: Math.random() * 100
    });
}

module.exports = { login, getRandomNumber };
