const Cafe = require('../models/cafe.model');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

function load(params) {
    return Cafe.get(params.id);
}

function get(req, res) {
    Cafe.get(req.params.cafeId).then((cafe) =>{
        if(cafe){
            res.json(cafe);
        }
    }, (err) =>{
        res.status(httpStatus.NOT_FOUND).send(err);
    });
}

function create(req, res) {

    let cafe = new Cafe();
     cafe.title = req.body.title;
     cafe.phone = req.body.phone ? req.body.phone : '';
     cafe.email = req.body.email? req.body.email : '';
     cafe.website = req.body.website ? req.body.website : '';
     cafe.photo = req.body.photo ? req.body.photo.slice() : [];
     cafe.rating = req.body.rating ? req.body.rating : 0.0;
     if (req.body.address) {
         cafe.address.unit = req.body.address.unit ? req.body.address.unit : '';
         cafe.address.house = req.body.address.house ? req.body.address.house : '';
         cafe.address.street = req.body.address.street ? req.body.address.street : '';
         cafe.address.city = req.body.address.city ? req.body.address.city : '';
         cafe.address.country = req.body.address.country ? req.body.address.country : '';
         cafe.address.postal = req.body.address.postal ? req.body.address.postal : '';
     }
     if (req.body.position) {
        cafe.position.lat =  req.body.position.lat ?  req.body.position.lat : 53.6325784;
        cafe.position.lng =  req.body.position.lng ?  req.body.position.lng : 23.479206;
     }
     if (req.body.schedule) {
        cafe.schedule.mn =  req.body.schedule.mn ?  req.body.schedule.mn : '';
        cafe.schedule.tu =  req.body.schedule.tu ?  req.body.schedule.tu : '';
        cafe.schedule.we =  req.body.schedule.we ?  req.body.schedule.we : '';
        cafe.schedule.th =  req.body.schedule.th ?  req.body.schedule.th : '';
        cafe.schedule.fr =  req.body.schedule.fr ?  req.body.schedule.fr : '';
        cafe.schedule.sa =  req.body.schedule.sa ?  req.body.schedule.sa : '';
        cafe.schedule.su =  req.body.schedule.su ?  req.body.schedule.su : '';
     } 
    cafe.description = req.body.description ? req.body.description : '';
    cafe.save((err) => {
        if (err)
            res.send(err);

        res.json({ message: 'Cafe created!' });
    });
}

function update(req, res) {
    Cafe.get(req.params.cafeId).then(cafe => {
        const tmp = cafe;
        cafe.title = req.body.title;
        cafe.phone = req.body.phone ? req.body.phone : cafe.phone;
        cafe.email = req.body.email? req.body.email : cafe.email;
        cafe.website = req.body.website ? req.body.website : cafe.website;
        cafe.photo = req.body.photo ? req.body.photo.slice() : [];
        cafe.rating = req.body.rating ? req.body.rating : cafe.rating;
        if (req.body.address) {
            cafe.address.unit = req.body.address.unit ? req.body.address.unit : cafe.address.unit;
            cafe.address.house = req.body.address.house ? req.body.address.house : cafe.address.house;
            cafe.address.street = req.body.address.street ? req.body.address.street : cafe.address.street;
            cafe.address.city = req.body.address.city ? req.body.address.city : cafe.address.city;
            cafe.address.country = req.body.address.country ? req.body.address.country : cafe.address.country;
            cafe.address.postal = req.body.address.postal ? req.body.address.postal : cafe.address.postal;
        }
        if (req.body.position) {
            cafe.position.lat =  req.body.position.lat ?  req.body.position.lat : cafe.position.lat;
            cafe.position.lng =  req.body.position.lng ?  req.body.position.lng : cafe.position.lng;
        }
        if (req.body.schedule) {
            cafe.schedule.mn =  req.body.schedule.mn ?  req.body.schedule.mn : cafe.schedule.mn;
            cafe.schedule.tu =  req.body.schedule.tu ?  req.body.schedule.tu : cafe.schedule.tu;
            cafe.schedule.we =  req.body.schedule.we ?  req.body.schedule.we : cafe.schedule.we;
            cafe.schedule.th =  req.body.schedule.th ?  req.body.schedule.th : cafe.schedule.th;
            cafe.schedule.fr =  req.body.schedule.fr ?  req.body.schedule.fr : cafe.schedule.fr;
            cafe.schedule.sa =  req.body.schedule.sa ?  req.body.schedule.sa : cafe.schedule.sa;
            cafe.schedule.su =  req.body.schedule.su ?  req.body.schedule.su : cafe.schedule.su;
        } 
        cafe.description = req.body.description ? req.body.description : ''; 

        
        cafe.save((err) => {
            if (err)
                res.send(err);

            res.json({ message: 'Cafe updated!' });
        });

    }, (err) =>{
        //const err1 = new APIError('Bear is not found!', httpStatus.NOT_FOUND);
        //Promise.reject(err1);
        res.status(httpStatus.NOT_FOUND).send(err);
    });
 }
 
 function list(req, res){
    Cafe.list().then((cafe) => {
        res.json(cafe);
    }, (err) => {
        res.send(err);
    });
 }

 function remove(req, res) {
    // return load(params).then(cafe => cafe.remove());
 
        Cafe.remove({
            _id: req.params.cafeId
        }, (err, cafe) => {
            if (err)
                res.status(httpStatus.NOT_FOUND).send(err);
    
            res.json({ message: 'Successfully deleted' });
        });
    
 }

 module.exports = { load, get, create, update, list, remove };