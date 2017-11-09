const Post = require('../models/post.model');

function load(params) {
    return Post.get(params.id);
}

function get(req, res) {
    return res.json(req.post);
}

function create(params) {
    const post = new Post({
        cafeID: params.data.cafeId,
        text: params.data.text,
        rate: params.data.rate, 
        user: {
            name: params.data.name,
            email: params.data.email,
            phone: params.data.phone
        },
        createdAt: params.data.createdAt
    });
    return post.save();
}

 function list(params){
     const { limit = 50 } = params;
     return Post.list({limit});
 }

 function remove(params) {
     return load(params).then(post => post.remove());
 }

 module.exports = { load, get, create, list, remove };