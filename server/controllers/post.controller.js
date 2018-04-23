const Post = require('../models/post.model');
const Cafe = require('../models/cafe.model');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

function load(params) {
    return Post.get(params.id);
}

function get(req, res) {
   //return res.json(req.post);
   Post.get(req.params.postId).then((post) =>{
    if(post){
        res.json(post);
    }
    }, (err) =>{
        res.status(httpStatus.NOT_FOUND).send(err);
    });
}


function create(req, res) {
    let post = new Post();
    post.cafeID = req.body.cafeID;
    post.text = req.body.text ? req.body.text : '';
    post.rate = req.body.rate ? req.body.rate : 0.0;
    post.createdAt = req.body.createdAt;
    if (req.body.user) {
        post.user.name =  req.body.user.name ?  req.body.user.name : '';
        post.user.email =  req.body.user.email ?  req.body.user.email : '';
        post.user.phone =  req.body.user.phone ?  req.body.user.phone : '';
    }
   
    post.save((err, result) => {
        if (err)
            res.send(err);
        updateAverage(result.cafeID);
        res.json({ message: 'Post created!' });
    });
  
}

function updateAverage(id) {
    
    if(id) {
    Post.aggregate([
        {
            $match: {
                cafeID: {
                    $eq: id
                }
            }
        }, {
            $group: {
                _id: id,
                average: {$avg: '$rate'}
            }
        }
    ], function(err, result) {
        
        if(result) {
            Cafe.findOneAndUpdate({_id: id}, {$set:{rating: result[0].average}}, {new: true}, function(err, doc){
                if(err) {
                    console.log('err', err);
                }
            }); 
        } else {
            console.log('err', err);
        }
    
    });
    }
}

 function list(req, res){
    Post.list().then((post) => {
        res.json(post);
    }, (err) => {
        res.send(err);
    });
 }
 

 function remove(req, res) {
    // return load(params).then(post => post.remove());
    var data;
    Post.findById(req.params.postId, (err, post) => {
        data = post;
    });

    Post.remove({
        _id: req.params.postId
    }, (err, post) => {
        if (err)
            res.status(httpStatus.NOT_FOUND).send(err);
        updateAverage(data.cafeID);
        res.json({ message: 'Successfully deleted' });
    });
 }

 module.exports = { load, get, create, list, remove };