//const Promise = require('bluebird');
const mongoose = require('mongoose');
//const httpStatus = require('http-status');
//const APIError = require('../helpers/APIError');
const Post = require('./post.model');

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

CafeSchema.pre('remove', function(next) {
    Post.remove({cafeID: this._id}).exec();
    next();
});

CafeSchema.statics = {

    get(id){
        return this.findById(id)
        .exec();
       
    },
    /**
     * List of cafe in ascending order on 'title'
     * @param {number} limit - limited number to be returned
     * @returns {Promise<Cafe[]>}
     */
    list(){
    
        return this.find()
        .sort({ title: 1 })
        .exec();
    }
};

/**
 * @typedef Cafe
 */
module.exports = mongoose.model('Cafe', CafeSchema);
