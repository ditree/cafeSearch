const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

const CafeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        unit: String,
        house: String,
        street: String,
        city: String,
        country: String,
        postal: String
    },
    position: {
        lat: Number,
        lng: Number
    },
    phone: String,
    email: String,
    website: String,
    photo: String,
    rating: Number,
    schedule: {
        mn: String,
        tu: String,
        we: String,
        th: String,
        fr: String,
        sa: String,
        su: String
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
     * List of cafe in ascending order on 'title'
     * @param {number} limit - limited number to be returned
     * @returns {Promise<Cafe[]>}
     */
    list({limit = 150} = {}){
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
