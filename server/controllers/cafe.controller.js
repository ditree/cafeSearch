const Cafe = require('../models/cafe.model');

function load(params) {
    return Cafe.get(params.id);
}

function get(req, res) {
    return res.json(req.cafe);
}

function create(params) {
    const cafe = new Cafe({
        title: params.data.title,
        position: {
            lat: params.data.position.lat,
            lng: params.data.position.lng
        } 
    });
    return cafe.save();
}

function update(params) {
    return load(params).then(cafe => {
        const tmp = cafe;
        cafe.title = params.data.title;
        cafe.position.lat = params.data.position.lat;
        cafe.position.lng = params.data.position.lng;
        return cafe.save();
    });
 }

 function list(params){
     const { limit = 50 } = params;
     return Cafe.list({limit});
 }

 function remove(params) {
     return load(params).then(cafe => cafe.remove());
 }

 module.exports = { load, get, create, update, list, remove };