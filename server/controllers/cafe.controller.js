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
        address: {
            unit: params.data.address.unit,
            house: params.data.address.house,
            street: params.data.address.street,
            city: params.data.address.city,
            country: params.data.address.country,
            postal: params.data.address.postal
        },
        position: {
            lat: params.data.position.lat,
            lng: params.data.position.lng
        },
        phone: params.data.phone,
        email: params.data.email,
        website: params.data.website,
        photo: params.data.photo,
        rating: params.data.rating,
        schedule: {
            mn: params.data.schedule.mn,
            tu: params.data.schedule.tu,
            we: params.data.schedule.we,
            th: params.data.schedule.th,
            fr: params.data.schedule.fr,
            sa: params.data.schedule.sa,
            su: params.data.schedule.su
        } 
    });
    return cafe.save();
}

function update(params) {
    return load(params).then(cafe => {
        const tmp = cafe;
        cafe.title = params.data.title;
        cafe.address.unit = params.data.address.unit;
        cafe.address.house = params.data.address.house;
        cafe.address.street = params.data.address.street;
        cafe.address.city = params.data.address.city;
        cafe.address.country = params.data.address.country;
        cafe.address.postal = params.data.address.postal;
        cafe.position.lat = params.data.position.lat;
        cafe.position.lng = params.data.position.lng;
        cafe.phone = params.data.phone;
        cafe.email = params.data.email;
        cafe.website = params.data.website;
        cafe.photo = params.data.photo;
        cafe.rating = params.data.rating;
        cafe.schedule.mn = params.data.schedule.mn;
        cafe.schedule.tu = params.data.schedule.tu;
        cafe.schedule.we = params.data.schedule.we;
        cafe.schedule.th = params.data.schedule.th;
        cafe.schedule.fr = params.data.schedule.fr;
        cafe.schedule.sa = params.data.schedule.sa;
        cafe.schedule.su = params.data.schedule.su;
        
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