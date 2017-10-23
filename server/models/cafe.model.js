const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

const CafeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    position: {
        lat: Number,
        lng: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

CafeSchema.method({

});

CafeSchema.statics = {
/**
 * Get cafe
 * @param {ObjectId} id 
 * @returns {Promise<Cafe, APIError>}
 */
    get(id){
        return this.findById(id)
        .exec()
        .then((cafe) => {
            if (cafe) {
                return cafe;
            }
            const err = new APIError('Cafe is not found!', httpStatus.NOT_FOUND);
            return Promise.reject(err);
        })
    },
    /**
     * List of cafe in ascending order on 'tytle'
     * @param {number} limit - limited number to be returned
     * @returns {Promise<Cafe[]>}
     */
    list({limit = 50} = {}){
        return this.find()
        .sort({ tytle: 1 })
        .limit(+limit)
        .exec();
    }
};

/**
 * @typedef Cafe
 */
module.exports = mongoose.model('Cafe', CafeSchema);
