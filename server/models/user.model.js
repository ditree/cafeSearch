
const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * User Schema
 */

 const UserSchema = new mongoose.Schema({
    name: String, 
    username: {
         type: String,
         required: true,
         unique: true
     },
     mobileNumber: {
         type: String,
         required: true,
         match: [/^[1-9][0-9]{6}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
     },
     createdAt: {
         type: Date,
         default: Date.now
     }
 });

 UserSchema.method({

 });

 UserSchema.statics = {
/**
 * Get user
 * @param {ObjectId} id 
 * @returns {Promise<User, APIError>}
 */
    get(id) {
        return this.findById(id)
        .exec()
        .then((user) => {
            if (user) {
                return user;
            }
            const err = new APIError('User is not found', httpStatus.NOT_FOUND);
            return Promise.reject(err);
        })
    }
 };

 /**
  * @typedef User
  */
  module.exports = mongoose.model('User', UserSchema);
