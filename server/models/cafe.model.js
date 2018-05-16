//const Promise = require('bluebird');
const mongoose = require('mongoose');
//const httpStatus = require('http-status');
//const APIError = require('../helpers/APIError');
const Post = require('./post.model');
const request = require('request');

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
    photo: [String],
    rating: Number,
    schedule: {
        mn: String,
        tu: String,
        we: String,
        th: String,
        fr: String,
        sa: String,
        su: String
    },
    description: String
});

CafeSchema.method({

});

CafeSchema.pre('remove', function(next) {
    Post.remove({cafeID: this._id}).exec();
    next();
});

CafeSchema.pre('save', function(next) {
 
    var house = this.address.house !== '' ? this.address.house+'+' : '';
    var street = this.address.street !== '' ? (this.address.street).replace(/ /g, '+')+',+' : '';
    var city = this.address.city !== '' ? this.address.city+',+' : 'Минск,+';
    var country = this.address.country !== '' ? this.address.city : 'Беларусь';

    /*var test = 'https://maps.googleapis.com/maps/api/geocode/json?'+
    'address='+house+street+city+this.address.country+
    '&language=ru&key=AIzaSyAG5wtDTPZIhhEac8P0g-bbcZrjvzRwUyM';
    console.log('url save', test);*/

    request(encodeURI('https://maps.googleapis.com/maps/api/geocode/json?'+
    'address='+house+street+city+this.address.country+
    '&language=ru&key=AIzaSyAG5wtDTPZIhhEac8P0g-bbcZrjvzRwUyM'),
    {json: true}, (err, res, body) => {
        if (err) {console.log(err);}
        else if (body.results && body.results[0].geometry) {
            this.position.lat = body.results[0].geometry.location.lat;
            this.position.lng = body.results[0].geometry.location.lng;
            // console.log(body.results[0].geometry);
        }
        

    });
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
    },

    updateAverage(id) {
        this.findOneAndUpdate({id: doc.cafeID}, {$set:{rating: rateByCafe.rating}}, {new: true}, function(err, doc){
            if(doc){
                 console.log(doc);
            }
        });
    }
};

/**
 * @typedef Cafe
 */
module.exports = mongoose.model('Cafe', CafeSchema);
