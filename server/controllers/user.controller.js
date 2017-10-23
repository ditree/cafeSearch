const User = require('../models/user.model');

function load(req, res, next, id) {
    User.get(id)
    .then((user) => {
        req.user = user;
        return next();
    })
    .catch(e => next(e));
}
/**
 * 
 * @param {*} req 
 * @param {*} res
 * @returns {User} 
 */
function get(req, res) {
    return res.json(req.user);
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function create(req, res, next) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

module.exports = { load, create, get };