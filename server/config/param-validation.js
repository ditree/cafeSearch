const Joi = require('joi');

const validationParam = {
    createUser: {
        body:{
            username: Joi.string().required(),
            mobileNumber: Joi.string().regex(/^[1-9][0-9]{6}$/).required()
        }
    },
    createCafe: {
        body: {
            title: Joi.string().required(),
        }
    },
    updateCafe: {
        body: {
            title: Joi.string().required()
        },
        params: {
            cafeId: Joi.string().hex().required()
        }
    },
    deleteCafe: {
        params: {
            cafeId: Joi.string().hex().required()
        }
    },
    createPost: {
        body: {
            cafeID: Joi.string().hex().required(),
        }
    },
    deletePost: {
        params: {
            postId: Joi.string().hex().required()
        }
    },
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
};

module.exports = validationParam;