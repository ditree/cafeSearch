const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

const PostSchema = new mongoose.Schema({
    cafeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe'
    },
    text: String,
    rate: Number,
    user: {
        name: String,
        email: String,
        phone: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PostSchema.method({

});

PostSchema.pre('save', function(next){
    var currentDate = new Date();
    if(!this.createdAt) {
        this.createdAt = currentDate;
    }
    next();
});

PostSchema.statics = {
/**
 * Get post
 * @param {ObjectId} id 
 * @returns {Promise<Post, APIError>}
 */
    get(id){
        return this.findById(id)
        .exec()
        .then((post) => {
            if (post) {
                return post;
            }
            const err = new APIError('Post is not found!', httpStatus.NOT_FOUND);
            return Promise.reject(err);
        })
    },
    /**
     * List of post in ascending order on 'title'
     * @param {number} limit - limited number to be returned
     * @returns {Promise<Post[]>}
     */
    list({limit = 50} = {}){
        return this.find()
        .sort({ tytle: 1 })
        .limit(+limit)
        .exec();
    }
};

/**
 * @typedef Post
 */
module.exports = mongoose.model('Post', PostSchema);
