const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/serch', { useMongoClient: true });
const Cafe = require('./models/cafe.model'),
    Post = require('./models/post.model');
mongoose.Promise = global.Promise;

Cafe.remove({}, (err, res) => {
    if(err) throw err;
     
 });
 Post.remove({}, (err, res) => {
    if(err) throw err;
 });
 
var teplo = new Cafe({
    title: "Кафе «#тепло»",
    address: {
        unit: "",
        house: "138",
        street: "ул. М. Богдановича",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9385488,
        lng: 27.5816171
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/1.тепло.jpg",
    rating: 4.5,
    schedule: {
        mn: "09:00-23:00",
        tu: "09:00-23:00",
        we: "09:00-23:00",
        th: "09:00-23:00",
        fr: "09:00-23:00",
        sa: "09:00-23:00",
        su: "09:00-23:00"
    }
});

teplo.save(function(err){
   if(err) throw err;
});


var post = new Post({
    cafeID: teplo._id,
    text: "Сегодня посетила кафе #тепло, и была приятно удивлена! Уютная атмосфера, тепло встретили, приветливый персонал, и потрясающе вкусная еда! Остались только самые лучшие впечатления))) Теперь я буду постоянным посетителем . Всем рекомендую!",
    rate: 4.5,
    user: {
        name: "Елена",
        phone: "",
        email: ""
    }
});
var post2 = new Post({
    cafeID: teplo._id,
    text: "Настолько уютная атмосфера и приятный интерьер, что даже уходить не хотелось! Очень порадовала кухня, особенно в соотношении цена-качество. Цены приятные, а порции большие. И персонал вежливый. Всем советую, не пожалеете",
    rate: 4.5,
    user: {
        name: "Ольга",
        phone: "",
        email: ""
    }   
});    
    
post.save(function(err, result) {
    if(err) throw err;
});


post2.save(function(err, res) {
    if(err) throw err;
});
console.log('saved');

/*
Cafe.find({}, function(err, res) {
    if (err) throw err;
    console.log(res);
  });

  Post.find({}, function(err, res) {
    if (err) throw err;
    console.log(res);
  });
  */