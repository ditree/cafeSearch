const mongoose = require('mongoose');
const config = require('./config/config');

const Cafe = require('./models/cafe.model'),
    Post = require('./models/post.model');
mongoose.Promise = global.Promise;
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { useMongoClient: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

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
console.log('saved 1');

var mjata = new Cafe({
    title: "Мята (кафе-бар)",
    address: {
        unit: "",
        house: "57",
        street: "пр-т Дзержинского",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.8755654,
        lng: 27.4949675
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/2.мята.jpg",
    rating: 4.3,
    schedule: {
        mn: "15:00-02:00",
        tu: "15:00-02:00",
        we: "15:00-02:00",
        th: "15:00-02:00",
        fr: "15:00-05:00",
        sa: "15:00-05:00",
        su: "15:00-02:00"
    }
});

mjata.save(function(err){
   if(err) throw err;
});


var post3 = new Post({
    cafeID: mjata._id,
    text: "Были в субботу с девушкой. Хорошее место, но лучше приходить компанией, потому что атмосфера создана именно для этого. Понравились коктейли и хорошие кальяны. Своевременная замена углей, внимательный персонал. Вернёмся ещё!",
    rate: 4.3,
    user: {
        name: "РОМАН",
        phone: "",
        email: ""
    }
});
var post4 = new Post({
    cafeID: mjata._id,
    text: "Место просто невероятное! Оооочень приятная атмосфера. Хочется возвращаться сюда снова и снова! Такого приветливого персонала давно нигде не встречала. Могу бесконечно перечислять плюсы этого заведения. Начиная от интерьера и заканчивая работой персонала. После посещения данного заведения остаются только самые приятные вречатления. Всегда можно прийти, расслабиться и погрузиться в прекрасную атмосферу уюта.",
    rate: 4.3,
    user: {
        name: "АРИНА",
        phone: "",
        email: ""
    }   
});    
    
post3.save(function(err, result) {
    if(err) throw err;
});


post4.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 2');


var kuhmister = new Cafe({
    title: "РЕСТОРАН БЕЛОРУССКОЙ КУХНИ «Кухмистр»",
    address: {
        unit: "",
        house: "40",
        street: "ул. К. Маркса",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9014652,
        lng: 27.5633964
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/3.кухмистр.jpg",
    rating: 4.5,
    schedule: {
        mn: "12:00-23:00",
        tu: "12:00-23:00",
        we: "12:00-23:00",
        th: "12:00-23:00",
        fr: "12:00-23:00",
        sa: "12:00-23:00",
        su: "12:00-23:00"
    }
});

kuhmister.save(function(err){
   if(err) throw err;
});


var post5 = new Post({
    cafeID: kuhmister._id,
    text: "Постоянно обедаем в ресторанчике 'Кухмистр' - диетические блюда,большие порции,всегда нам очень нравится,все официанты очень приятные молодые девушки и парни,все всегда быстро,вкусно, качественно. очень доволен! Спасибо. И цена нам очень устраивает. Недорого. С уважением,Анна.",
    rate: 4.5,
    user: {
        name: "Анна",
        phone: "",
        email: ""
    }
});
var post6 = new Post({
    cafeID: kuhmister._id,
    text: "Добрый день! Были в Вашем ресторане в субботу 15.07.17. Заранее забронировали столик- это удобно если планируешь какое-то мероприятие. Очень понравилась приятная атмосфера, спокойный музыкальный фон, можно вести беседу не перекрикивая музыку. При выборе блюд официант подробно рассказал о блюдах,которые мы выбрали, очень обходительный и доброжелательный. Старался помочь сделать правильный выбор. Еда очень вкусная, а в меню вы не найдете стандартных блюд, как в других ресторанах. В этом ресторане Вы попробуете интересные национальные белорусские блюда. Заказывали: 'горячую сковороду' приготовлено очень вкусно, по- домашнему, порция большая, а так же морс клюквенный, салат и десерт. Все понравилось. В ресторане два зала: для курящих и для некурящих, тем самым обеспечивают комфортное время провождения в ресторане и курящим и не курящим посетителям. Спасибо. Очень хорошо провели время в Вашем ресторане.",
    rate: 4.5,
    user: {
        name: "МАРИНА",
        phone: "",
        email: ""
    }   
});    
    
post5.save(function(err, result) {
    if(err) throw err;
});


post6.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 3');

var goldenCaffee = new Cafe({
    title: "Кафе «Golden Coffee (Голден кофе)»",
    address: {
        unit: "",
        house: "26",
        street: "ул. М. Богдановича",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9159129,
        lng: 27.5615148
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/4.golden_coffe.jpg",
    rating: 4.4,
    schedule: {
        mn: "круглосуточно",
        tu: "круглосуточно",
        we: "круглосуточно",
        th: "круглосуточно",
        fr: "круглосуточно",
        sa: "круглосуточно",
        su: "круглосуточно"
    }
});

goldenCaffee.save(function(err){
   if(err) throw err;
});


var post7 = new Post({
    cafeID: goldenCaffee._id,
    text: "Посетила данное заведение несколько дней назад, вежливая официантка подняла настроение, карпаччо было великолепным, ореховый торт оооочень вкусный. Хорошая атмосфера и отличная кухня!",
    rate: 4.4,
    user: {
        name: "Александра",
        phone: "",
        email: ""
    }
});
var post8 = new Post({
    cafeID: goldenCaffee._id,
    text: "Ребята, пожалуйста обучите персонал на ресепшене общаться с гостями. Приготовьте им заготовленных фраз штук пять-десять, обучите вежливости. Не приятно же, когда тебя встречают словами 'разденьтесь пожалуйста'. Я же не на приеме у врача. Вы когда гостей дома встречаете, наверняка говорите им по-другому. Не так уж сложно сказать 'давайте я Вам помогу с верхней одеждой' или 'у нас теперь можно оставить пальто в гардеробе'. Обновлённое заведение мне понравилось. Очень тепло на летней террасе, в диванах хочется утонуть, вежливые официанты, которым хочется оставить чаевые. Ваше прошлое меню нравилось больше: были картинки и было понятнее, что я хочу с'есть. Очень классно сделали сцену, наконец-то диджик я не ютится в углу и его видно. Все хорошо. Но осадок от встречи остался. Учите персонал.",
    rate: 4.4,
    user: {
        name: "МАРИНА",
        phone: "",
        email: ""
    }   
});    
    
post7.save(function(err, result) {
    if(err) throw err;
});


post8.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 4');


var salateira = new Cafe({
    title: "Ресторан здорового фастфуда «Salateira (Салатейра)»",
    address: {
        unit: "",
        house: "9",
        street: "пр-т Победителей",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9085096,
        lng: 27.5464099
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/5.салатейра.jpg",
    rating: 4.4,
    schedule: {
        mn: "10:00-22:00",
        tu: "10:00-22:00",
        we: "10:00-22:00",
        th: "10:00-22:00",
        fr: "10:00-22:00",
        sa: "10:00-22:00",
        su: "10:00-22:00"
    }
});

salateira.save(function(err){
   if(err) throw err;
});


var post9 = new Post({
    cafeID: salateira._id,
    text: "Скатились полностью. Салатейра достигла дна. Был много раз у них, начиная с самого открытия. Вначале были аккуратные квадратные кусочки, были стаканчики с нормальным кусочком лимона и мятой. А сейчас.Cейчас какой-то кусок 2х2 мм лимона, цезарь напоминает хлебную тарелку. Вывод таков: популярность губит.",
    rate: 4.4,
    user: {
        name: "ЕГОР",
        phone: "",
        email: ""
    }
});
var post10 = new Post({
    cafeID: salateira._id,
    text: "Испортились! Ходили к Вам с самого открытия и последние 2 раза были ужасны! Во-первых, обслуживание, когда зазвонил пейджер (после подружки, которая заказывала позже), подошла, оказалось что мидий нет. Положили в салат двойной тунец. В целом, салат получился ужасным (тунец заменить можно, а креветками значит нельзя). Капучино тоже делали при мне...Потеряла время, деньги, аппетит и настроение Подруге пасту не разогрели! Густа, если что...В общем, испортились.",
    rate: 4.4,
    user: {
        name: "ЮЛИЯ",
        phone: "",
        email: ""
    }   
});    
    
post9.save(function(err, result) {
    if(err) throw err;
});


post10.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 5');


var loft = new Cafe({
    title: "Кафе, ресторан, бар «LOFT кафе (Лофт кафе)»",
    address: {
        unit: "",
        house: "22",
        street: "ул. П. Бровки",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9120866,
        lng: 27.598654
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/6.лофт_кафе.jpg",
    rating: 4.1,
    schedule: {
        mn: "11:00-00:00",
        tu: "11:00-00:00",
        we: "11:00-00:00",
        th: "11:00-00:00",
        fr: "11:00-05:00",
        sa: "11:00-05:00",
        su: "11:00-00:00"
    }
});

loft.save(function(err){
   if(err) throw err;
});


var post9 = new Post({
    cafeID: loft._id,
    text: "Отмечали день рождения друга, все очень понравилось еда, атмосфера, музыка, коктейли и чай, обслуживание, особенно официантка Настя, спасибо тебе, было приятно встретить милого и улыбчивого человека.",
    rate: 4.1,
    user: {
        name: "SERGEI",
        phone: "",
        email: ""
    }
});
var post10 = new Post({
    cafeID: loft._id,
    text: "Отмечали с мужем годовщину. Все было замечательно. Обслуживание на уровне. Очень приятные официанты. Еда - пальчики оближешь! Определённо рекомендую посетить данное заведение.",
    rate: 4.1,
    user: {
        name: "ДАРЬЯ",
        phone: "",
        email: ""
    }   
});    
    
post9.save(function(err, result) {
    if(err) throw err;
});


post10.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 6');


var kvartira = new Cafe({
    title: "Кафе-клуб «Квартира №3»",
    address: {
        unit: "",
        house: "3",
        street: "ул. Кульман",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9197926,
        lng: 27.5805008
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/7.квартира_номер_3.jpg",
    rating: 3.5,
    schedule: {
        mn: "круглосуточно",
        tu: "круглосуточно",
        we: "круглосуточно",
        th: "круглосуточно",
        fr: "круглосуточно",
        sa: "круглосуточно",
        su: "круглосуточно"
    }
});

kvartira.save(function(err){
   if(err) throw err;
});


var post11 = new Post({
    cafeID: kvartira._id,
    text: "Были сегодня в этом кафе с девчонками,все понравилось. С обслуживанием и официантом - Владом повезло,приятный в общении,улыбчивый и весёлый! Заказ долго не приходилось ждать,так как мы были там одни)",
    rate: 3.5,
    user: {
        name: "ТАТЬЯНА",
        phone: "",
        email: ""
    }
});
var post12 = new Post({
    cafeID: kvartira._id,
    text: "Хорошее заведение,есть вопросы только летним вечеринкам этого года,немного иначе были раньше здесь выходные,но думаю все вернется на свои места. Удачи!",
    rate: 3.5,
    user: {
        name: "ВАЛЕРИЙ",
        phone: "",
        email: ""
    }   
});    
    
post11.save(function(err, result) {
    if(err) throw err;
});


post12.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 7');


var perfetto = new Cafe({
    title: "Ресторан «Perfetto (Перфетто)»",
    address: {
        unit: "",
        house: "28",
        street: "ул. Немига",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9018619,
        lng: 27.5456482
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/8.перфетто.jpg",
    rating: 4.3,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-00:00"
    }
});

perfetto.save(function(err){
   if(err) throw err;
});


var post13 = new Post({
    cafeID: perfetto._id,
    text: "Очень хороший ресторан,приятный персонал, отличное обслуживание. Кухня выше всяких похвал!!!",
    rate: 4.3,
    user: {
        name: "ЕВГЕНИЯ",
        phone: "",
        email: ""
    }
});
var post14 = new Post({
    cafeID: perfetto._id,
    text: "Сегодня посетили этот ресторан. Великолепная итальянская кухня!!! Лазанья просто супер))) Спасибо!!!",
    rate: 4.3,
    user: {
        name: "Татьяна",
        phone: "",
        email: ""
    }   
});    
    
post13.save(function(err, result) {
    if(err) throw err;
});


post14.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 8');


var govoril = new Cafe({
    title: "Кафе «Я Ж ТЕБЕ ГОВОРИЛ!.. место про еду»",
    address: {
        unit: "",
        house: "5а",
        street: "ул. Октябрьская",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.8940704,
        lng: 27.5638094
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/9.я_ж_тебе_говорил.jpg",
    rating: 4.5,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-00:00"
    }
});

govoril.save(function(err){
   if(err) throw err;
});


var post15 = new Post({
    cafeID: govoril._id,
    text: "Посетили это место не впервые, и, как всегда остались довольны. Очень уютное и атмосферное заведение. Отличный сервис, приветливый, быстрый и внимательный персонал. Пробовали многие блюда, но особенно понравился невероятно вкусный Тартар из говядины. Моему спутнику пришёлся по душе Пеппер стейк. Нежнейшее сочное мясо с необыкновенным соусом. В общем, всё круто, всё супер) Мы остались довольны с момента, когда мы вошли в это заведение и до последнего кусочка морковного торта) Спасибо Вам огромное)",
    rate: 4.5,
    user: {
        name: "ЕКАТЕРИНА",
        phone: "",
        email: ""
    }
});
var post16 = new Post({
    cafeID: govoril._id,
    text: "Пришли пообедать, времени не много свободного и вместо того, чтобы обслужить быстро, мы 40 минут ждали, пока примут заказ. На вопрос в чем дело, официант начала оправдываться, что она одна здесь и много людей. При этом говорилось это с нежеланием и отвращением к клиентам, не улыбалась, чуть ли не швыряла тарелки на стол. В общем, посещать это место больше нет желания...",
    rate: 4.5,
    user: {
        name: "ЮЛИАНА",
        phone: "",
        email: ""
    }   
});    
    
post15.save(function(err, result) {
    if(err) throw err;
});


post16.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 9');


var meals = new Cafe({
    title: "Кафе «Meals (Милс)»",
    address: {
        unit: "",
        house: "72/1",
        street: "ул. Тимирязева",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.925411,
        lng: 27.509297
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/10.милс.jpg",
    rating: 4.2,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-00:00"
    }
});

meals.save(function(err){
   if(err) throw err;
});


var post17 = new Post({
    cafeID: meals._id,
    text: "Отличное место для спокойного отдыха!!! Кухня действительно домашняя. Приятный персонал, дружелюбная атмосфера. Спасибо вам огромное за вашу работу и мой приятный отдых!",
    rate: 4.2,
    user: {
        name: "Светлана",
        phone: "",
        email: ""
    }
});
var post18 = new Post({
    cafeID: meals._id,
    text: "Любимое заведение. Вкусные обеды по демократичным ценам.",
    rate: 4.2,
    user: {
        name: "Максим",
        phone: "",
        email: ""
    }   
});    
    
post17.save(function(err, result) {
    if(err) throw err;
});


post18.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 10');


var miaDora = new Cafe({
    title: "Ресторан-караоке «Mia Dora (Мия Дора)»",
    address: {
        unit: "",
        house: "53",
        street: "ул. Клары Цеткин",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9043715,
        lng: 27.5306188
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/11.mia_dora.jpg",
    rating: 4.3,
    schedule: {
        mn: "20:00-05:00",
        tu: "20:00-05:00",
        we: "20:00-05:00",
        th: "20:00-05:00",
        fr: "20:00-05:00",
        sa: "20:00-05:00",
        su: "20:00-05:00"
    }
});

miaDora.save(function(err){
   if(err) throw err;
});


var post19 = new Post({
    cafeID: miaDora._id,
    text: "Хотим высказать искренне благодарность ресторану-караоке 'Mia Dora', за предоставленную возможность прекрасно отметить 30-ти летие совместной жизни! Администратор Валентина помогла составить отличный список блюд, учитывая наши с мужем пожелания, а так же она чудесный собеседник! Официант Татьяна чудесная девушка, которая профессионально, ненавязчиво выполняла свои обязанности. Очень приятная девушка. Ведущий Никита отлично пел и развлекал нас. Особенная благодарность поварам, так как вкус и подача блюд были на высоте! И в заключение хотелось бы выразить благодарность директору данного заведения. Чудесный человек, который так же принял во внимание наши пожелания! Всего вам самого наилучшего! Наталья и Дмитрий",
    rate: 4.3,
    user: {
        name: "НАТАЛЬЯ И ДМИТРИЙ",
        phone: "",
        email: ""
    }
});
var post20 = new Post({
    cafeID: miaDora._id,
    text: "Благодарю ресторан-караоке 'Mia Dora' за проведенный вечер субботы. Это было настолько эмоционально, что послевкусие осталось еще на долго! Еда была безумно вкусная, обслуживание на уровне. Но, наверное самым главным плюсом данного заведения является ведущий Никита. Человек с огромной душой, прекрасным голосом, и готовностью всегда помочь. Благодаря ему весь зал был наполнен позитивом, так как он не давал скучать.",
    rate: 4.3,
    user: {
        name: "СВЕТЛАНА",
        phone: "",
        email: ""
    }   
});    
    
post19.save(function(err, result) {
    if(err) throw err;
});


post20.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 11');


var lilou = new Cafe({
    title: "Кафе «LILOU (Лилоу)»",
    address: {
        unit: "",
        house: "1",
        street: "ул. Кальварийская",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9050594,
        lng: 27.5371577
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/12.lilou.jpg",
    rating: 4.3,
    schedule: {
        mn: "12:00-23:00",
        tu: "12:00-23:00",
        we: "12:00-23:00",
        th: "12:00-23:00",
        fr: "12:00-02:00",
        sa: "12:00-02:00",
        su: "12:00-23:00"
    }
});

lilou.save(function(err){
   if(err) throw err;
});


var post21 = new Post({
    cafeID: lilou._id,
    text: "Если у вас ответственное мероприятие, рекомендую кафе Лилу: приятная атмосфера, вкусная кухня, лояльная политика руководства кафе, выполнение всех взятых на себя обязательств, вежливый внимательный персонал, демократичные цены. Лариса Валерьевна, большое спасибо Вам за привлекательные предложения по организации моего юбилея, за грамотно составленное меню, за внимательное отношение.",
    rate: 4.3,
    user: {
        name: "НАТАЛЬЯ КОВГАНОВА",
        phone: "",
        email: ""
    }
});
var post22 = new Post({
    cafeID: lilou._id,
    text: "Мы долго искали место для нашего семейного праздника-нашей свадьбы, выбрали Лилу. Я долго переживала, ведь день должен был остаться запоминающим на всю жизнь! И знаете, я хочу выразить огромную благодарность этому кафе, в первую очередь чудесному администратору-Виктория,спасибо вам, все мои пожелания были выполнены, все было на высшем уровне! Спасибо официантам! Весь персонал смог сделать этот день идеальным! Кухня-очень вкусно все! Советую всем, это чудесное место, очень уютное!",
    rate: 4.3,
    user: {
        name: "АННА",
        phone: "",
        email: ""
    }   
});    
    
post21.save(function(err, result) {
    if(err) throw err;
});


post22.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 12');


var vremjaEst = new Cafe({
    title: "Кафе «Время есть»",
    address: {
        unit: "",
        house: "33",
        street: "ул. Матусевича",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9157581,
        lng: 27.4586052
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/13.время_есть.jpg",
    rating: 4.2,
    schedule: {
        mn: "11:00-00:00",
        tu: "11:00-00:00",
        we: "11:00-00:00",
        th: "11:00-00:00",
        fr: "11:00-05:00",
        sa: "11:00-05:00",
        su: "11:00-00:00"
    }
});

vremjaEst.save(function(err){
   if(err) throw err;
});


var post23 = new Post({
    cafeID: vremjaEst._id,
    text: "Пицца была подгоревшая, обслуживание никакое. Место на один раз.",
    rate: 4.2,
    user: {
        name: "Ольга",
        phone: "",
        email: ""
    }
});
var post24 = new Post({
    cafeID: vremjaEst._id,
    text: "Очень все понравилось! Кальянщик адекватный и сообразительный!) Ему отдельный +!) Вокал девушки на высоком уровне! Официанты и администрация не навязчивы и конкретны! Всем рекомендую! Случайно заехали но остались довольны! ",
    rate: 4.2,
    user: {
        name: "Дмитрий",
        phone: "",
        email: ""
    }   
});    
    
post23.save(function(err, result) {
    if(err) throw err;
});


post24.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 13');


var greyCafe = new Cafe({
    title: "Кафе «Грай-кафэ»",
    address: {
        unit: "",
        house: "33",
        street: "ул. Интернациональная",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9046172,
        lng: 27.5580008
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/14.грай-кафе.jpg",
    rating: 4.5,
    schedule: {
        mn: "12:00-23:00",
        tu: "12:00-23:00",
        we: "12:00-23:00",
        th: "12:00-23:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-23:00"
    }
});

greyCafe.save(function(err){
   if(err) throw err;
});


var post25 = new Post({
    cafeID: greyCafe._id,
    text: "'Грай' - очень стильное заведение, все залы оформлены потрясающе! Я бы посоветовала музыкантам корректировать свой репертуар под посетителей, а не работать как роботы, ни шаг в сторону. Очень внимательный персонал, обслуживают быстро и с улыбкой.",
    rate: 4.5,
    user: {
        name: "ВИКТОРИЯ",
        phone: "",
        email: ""
    }
});
var post26 = new Post({
    cafeID: greyCafe._id,
    text: "Вчера с друзьями посетили кафе 'Грай'. Хочу выразить благодарность замечательному персоналу. Кухня была отличная. Горячее приготовили быстро и оооооочень вкусно!!!!",
    rate: 4.5,
    user: {
        name: "ДИНА",
        phone: "",
        email: ""
    }   
});    
    
post25.save(function(err, result) {
    if(err) throw err;
});


post26.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 14');


var chaplin = new Cafe({
    title: "Арт-кафе «Chaplin (Чаплин)»",
    address: {
        unit: "пом. 37",
        house: "57б",
        street: "ул. Сурганова",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9286911,
        lng: 27.580769
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/15.чаплин.jpg",
    rating: 3.8,
    schedule: {
        mn: "12:00-23:00",
        tu: "12:00-23:00",
        we: "12:00-23:00",
        th: "12:00-23:00",
        fr: "12:00-23:00",
        sa: "12:00-23:00",
        su: "12:00-23:00"
    }
});

chaplin.save(function(err){
   if(err) throw err;
});


var post27 = new Post({
    cafeID: chaplin._id,
    text: "Буду посещать еще))). Забежали случайно, поесть блинов на масленицу. Заказали мачанку и блины с моцареллой. Все прекрасно. ОТ блинов с сыром и вишневым вареньем я более, чем в восторге.",
    rate: 3.8,
    user: {
        name: "ОКСАНА",
        phone: "",
        email: ""
    }
});
var post28 = new Post({
    cafeID: chaplin._id,
    text: "Место - супер! очень атмосферное, уютное, по нескольким телевизорам и большому экрану показывают кино (ну либо клипы, либо кино), официанты и администраторы доброжелательные и веселые",
    rate: 3.8,
    user: {
        name: "МАРИ",
        phone: "",
        email: ""
    }   
});    
    
post27.save(function(err, result) {
    if(err) throw err;
});


post28.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 15');

var monaco = new Cafe({
    title: "Кафе-караоке «MONACO (Монако)»",
    address: {
        unit: "",
        house: "17",
        street: "пр-т Победителей",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.910229,
        lng: 27.5449717
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/16.монако.jpg",
    rating: 4.0,
    schedule: {
        mn: "12:00-05:00",
        tu: "12:00-05:00",
        we: "12:00-05:00",
        th: "12:00-05:00",
        fr: "12:00-05:00",
        sa: "17:00-05:00",
        su: "17:00-05:00"
    }
});

monaco.save(function(err){
   if(err) throw err;
});


var post29 = new Post({
    cafeID: monaco._id,
    text: "Отмечали выпускной...все очень понравилось! Еда вкусная, обслуживание на высшем уровне. Все прошло на Ура! Отдельное спасибо администратору Елене, она просто солнышко!",
    rate: 4.0,
    user: {
        name: "Ирина",
        phone: "",
        email: ""
    }
});
var post30 = new Post({
    cafeID: monaco._id,
    text: "Отмечали день рождения подруги 2.12.2016. Абсолютно все: от входа в заведение до выхода было безупречно! Хотим выразить огромную благодарность администратору Алесе, официанту Павлу, бармену Александру за то, что сделали наш вечер шикарным!",
    rate: 4.0,
    user: {
        name: "АННА",
        phone: "",
        email: ""
    }   
});    
    
post29.save(function(err, result) {
    if(err) throw err;
});


post30.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 16');

var view = new Cafe({
    title: "Ресторан «The View»",
    address: {
        unit: "",
        house: "7а",
        street: "пр-т Победителей",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9076706,
        lng: 27.5474748
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/17.the_view.jpg",
    rating: 4.2,
    schedule: {
        mn: "12:00-23:30",
        tu: "12:00-23:30",
        we: "12:00-23:30",
        th: "12:00-23:30",
        fr: "12:00-23:30",
        sa: "12:00-23:30",
        su: "12:00-23:30"
    }
});

view.save(function(err){
   if(err) throw err;
});


var post31 = new Post({
    cafeID: view._id,
    text: "Замечательное место с уютной атмосферой и приветливым персоналом. Из окон Минск как на ладони, очень красиво. Изысканные, вкусные блюда, хороший выбор вин.",
    rate: 4.2,
    user: {
        name: "ВАЛЕРИЙ",
        phone: "",
        email: ""
    }
});
var post32 = new Post({
    cafeID: view._id,
    text: "Отмечали с мужем годовщину свадьбы! Хорошее,уютное с хорошим персоналом заведение! Цены не заоблачные! Очень красивый вид из окна!",
    rate: 4.2,
    user: {
        name: "МАРТА",
        phone: "",
        email: ""
    }   
});    
    
post31.save(function(err, result) {
    if(err) throw err;
});


post32.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 17');


var podvorie = new Cafe({
    title: "Ресторан «Подворье»",
    address: {
        unit: "",
        house: "23",
        street: "ул. Червякова",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9239815,
        lng: 27.5469678
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/18.подворье.jpg",
    rating: 4.3,
    schedule: {
        mn: "12:00-23:00",
        tu: "12:00-23:00",
        we: "12:00-23:00",
        th: "12:00-23:00",
        fr: "12:00-23:00",
        sa: "12:00-23:00",
        su: "12:00-23:00"
    }
});

podvorie.save(function(err){
   if(err) throw err;
});


var post33 = new Post({
    cafeID: podvorie._id,
    text: "Второй год приезжаем из Питера в Минск и ужинаем веселой компанией только в этом ресторане. Вот и вчера (16.09.17) были там. Все очень вкусно, шустрые официанты. Музыка - это отдельная фишка ! Просто восхитительно!",
    rate: 4.3,
    user: {
        name: "Илья",
        phone: "",
        email: ""
    }
});
var post34 = new Post({
    cafeID: podvorie._id,
    text: "Не понравилось.Безумно громкая музыка со странным репертуаром Кухня хорошая.Обслуживание нормальное.",
    rate: 4.3,
    user: {
        name: "АЛЕКСАНДР",
        phone: "",
        email: ""
    }   
});    
    
post33.save(function(err, result) {
    if(err) throw err;
});


post34.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 18');


var baldenini = new Cafe({
    title: "Ресторан «Baldenini Сafe»",
    address: {
        unit: "",
        house: "2",
        street: "ул. Будславская",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9593034,
        lng: 27.535378
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/19.baldenini.jpg",
    rating: 4.3,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-00:00"
    }
});

baldenini.save(function(err){
   if(err) throw err;
});


var post35 = new Post({
    cafeID: baldenini._id,
    text: "Отмечали ДР в кафе. Все понравилось,блюда были очень вкусные.Остались довольны. Спасибо,будем заходить ещё!",
    rate: 4.3,
    user: {
        name: "ТАТЬЯНА",
        phone: "",
        email: ""
    }
});
var post36 = new Post({
    cafeID: baldenini._id,
    text: "Зашел в кафе сегодня пообедать.Примерно в 12.40 у меня приняли заказ из обеденного меню. До 13.20 мне принесли только салат. Это непозволительно долго с учетом ограниченности обеденного времени.",
    rate: 4.3,
    user: {
        name: "АРТЁМ",
        phone: "",
        email: ""
    }   
});    
    
post35.save(function(err, result) {
    if(err) throw err;
});


post36.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 19');


var renesans = new Cafe({
    title: "Ресторан «РэнеСанс»",
    address: {
        unit: "",
        house: "23",
        street: "пл. Свободы",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9036523,
        lng: 27.5550949
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/20.РэнеСанс.jpg",
    rating: 4.5,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-02:00",
        sa: "12:00-02:00",
        su: "12:00-02:00"
    }
});

renesans.save(function(err){
   if(err) throw err;
});


var post37 = new Post({
    cafeID: renesans._id,
    text: "Кухня неплохая: карпаччо, говядина и свинина были достойны, но вот драники с семгой не совсем понравились. Обслуживание приемлемое.",
    rate: 4.5,
    user: {
        name: "Ирина",
        phone: "",
        email: ""
    }
});
var post38 = new Post({
    cafeID: renesans._id,
    text: "Праздновали в этом ресторане юбилей мамы. Стол забронировали за неделю, администратор помог с составлением меню, дали скидку в честь ДР, было приятно. Так как был пред.заказ можно было нести свою воду и алкоголь. Официант был вежливый, обходительный и приятный.",
    rate: 4.5,
    user: {
        name: "ЕЛЕНА",
        phone: "",
        email: ""
    }   
});    
    
post37.save(function(err, result) {
    if(err) throw err;
});


post38.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 20');


var grand = new Cafe({
    title: "Кафе «Grand Сafe (Гранд кафе)»",
    address: {
        unit: "",
        house: "2",
        street: "ул. Ленина",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9021282,
        lng: 27.5542071
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/21.grand_cafe.jpg",
    rating: 4.4,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-00:00"
    }
});

grand.save(function(err){
   if(err) throw err;
});


var post39 = new Post({
    cafeID: grand._id,
    text: "Праздничный ужин в Гранд-кафе честь 18-летия дочери запомнился нам особенным! Это отлично приготовленные стейки, необычные для нас блюда, церемония подачи одного из десерта Шоколадной сферы! Вежливость, непринужденность, чёткости, внимательность персонала.",
    rate: 4.4,
    user: {
        name: "АЛЛА",
        phone: "",
        email: ""
    }
});
var post40 = new Post({
    cafeID: grand._id,
    text: "Все прекрасно, столько лет, а все остаётся на невероятно прекрасном уровне, и обслуживание, и вкус блюд. Всегда было интересно узнать, как обслуживающему персоналу удается найти ту тонкую грань, чтобы не перейти в пафос или навязчивость. Душевно, приятно, вкусно - это лишь малая толика комплиментов для данного заведения.",
    rate: 4.4,
    user: {
        name: "ЕГОР",
        phone: "",
        email: ""
    }   
});    
    
post39.save(function(err, result) {
    if(err) throw err;
});


post40.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 21');


var sad = new Cafe({
    title: "Кафе «САД»",
    address: {
        unit: "",
        house: "17",
        street: "пл. Свободы",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9044519,
        lng: 27.5513667
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/22.сад.jpg",
    rating: 4.2,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-04:00",
        sa: "12:00-04:00",
        su: "12:00-00:00"
    }
});

sad.save(function(err){
   if(err) throw err;
});


var post41 = new Post({
    cafeID: sad._id,
    text: "Приятный интерьер, вкусная еда, хорошее вино и самое главное замечательный персонал! Спасибо большое администратору и официанту, которые работали 4 июля. Мы отмечали с мужем важный для нас праздник, работники об этом догадались и проявили участие, угостив нас десертом за счет заведение. ",
    rate: 4.2,
    user: {
        name: "ЯНА",
        phone: "",
        email: ""
    }
});
var post42 = new Post({
    cafeID: sad._id,
    text: "В пятницу отмечали День Рождения в этом месте, где заранее все вопросы обговорили. Обслуживание официанта Полины нам понравилось и очень порадовала компетентность администратора Алексея, благодаря которому наш отдых прошёл на высоком уровне, он вынес торт со свечами и поздравил! Круто получить бесплатный десерт со свечкой в честь дня рождения) ",
    rate: 4.2,
    user: {
        name: "Игорь",
        phone: "",
        email: ""
    }   
});    
    
post41.save(function(err, result) {
    if(err) throw err;
});


post42.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 22');


var grandBellagio = new Cafe({
    title: "Ресторан «Grand Bellagio (Гранд Беладжио)»",
    address: {
        unit: "",
        house: "17",
        street: "пр-т Машерова",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9161436,
        lng: 27.563324
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/23.грандж-беладжио.jpg",
    rating: 4.3,
    schedule: {
        mn: "круглосуточно",
        tu: "круглосуточно",
        we: "круглосуточно",
        th: "круглосуточно",
        fr: "круглосуточно",
        sa: "круглосуточно",
        su: "круглосуточно"
    }
});

grandBellagio.save(function(err){
   if(err) throw err;
});


var post43 = new Post({
    cafeID: grandBellagio._id,
    text: "Крайне разочарованы в посещении этого места. Вроде 'европейская кухня с акцентом на итальянскую', а карпаччо самое невкусное,которое я когда-либо ела. Солянка, которая была перегрета в микроволновке, обжигает язык. 100% несовпадение цены и качества! Обслуживание на 2!",
    rate: 4.3,
    user: {
        name: "ПОЛИНА",
        phone: "",
        email: ""
    }
});
var post44 = new Post({
    cafeID: grandBellagio._id,
    text: "Были на Gastrofeste, Азиатская кухня не впечатлила, но сам ресторан очень понравился. Оригинальный интерьер, приятная музыка",
    rate: 4.3,
    user: {
        name: "Мария",
        phone: "",
        email: ""
    }   
});    
    
post43.save(function(err, result) {
    if(err) throw err;
});


post44.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 23');



var shikari = new Cafe({
    title: "Ресторан «Шикари»",
    address: {
        unit: "",
        house: "18",
        street: "пр-т Независимости",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.8994535,
        lng: 27.5553015
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/24.шикари.jpg",
    rating: 4.2,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-02:00",
        sa: "12:00-02:00",
        su: "12:00-00:00"
    }
});

shikari.save(function(err){
   if(err) throw err;
});


var post45 = new Post({
    cafeID: shikari._id,
    text: "Замечательное место и большое спасибо официанту Ромарио. Буду навещать Шикари почаще.",
    rate: 4.2,
    user: {
        name: "ЕКАТЕРИНА",
        phone: "",
        email: ""
    }
});
var post46 = new Post({
    cafeID: shikari._id,
    text: "На мой вкус - невероятно красивое, стильное, уютное, а главное (!) сервисное заведение. Атмосфера приятнейшая, во многом, благодаря девушкам-официантам, которые умеют обслужить ненавязчиво и заботливо. Кухня не совсем то, что мне нравится, но ради атмосферы посещать буду, поскольку это одно из немногих заведений Минска, где всё, как надо.",
    rate: 4.2,
    user: {
        name: "ЕЛЕНА",
        phone: "",
        email: ""
    }   
});    
    
post45.save(function(err, result) {
    if(err) throw err;
});


post46.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 24');


var paris = new Cafe({
    title: "Ресторан «Café de Paris (Кафе де Пари)»",
    address: {
        unit: "",
        house: "8",
        street: "ул. К. Маркса",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.8962404,
        lng: 27.5521257
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/25.кафе_де_пари.jpg",
    rating: 4.4,
    schedule: {
        mn: "12:00-00:00",
        tu: "12:00-00:00",
        we: "12:00-00:00",
        th: "12:00-00:00",
        fr: "12:00-00:00",
        sa: "12:00-00:00",
        su: "12:00-00:00"
    }
});

paris.save(function(err){
   if(err) throw err;
});


var post47 = new Post({
    cafeID: paris._id,
    text: "Приходили отметить с подружками День рождения, остались очень довольны. Все было очень вкусным, прекрасная атмосфера, девочка официантка очень внимательна, советовала с выбором блюд. А как было приятно, когда в конце вечера меня персонал поздравил с Днём рождения и преподнесли подарочек от ресторана безумно вкусный Наполеон и Лимончелло. Обязательно вернёмся ещё не один раз.",
    rate: 4.4,
    user: {
        name: "Екатерина",
        phone: "",
        email: ""
    }
});
var post48 = new Post({
    cafeID: paris._id,
    text: "Все супер! Отличная кухня, приветливый персонал, тёплая атмосфера!!!",
    rate: 4.4,
    user: {
        name: "ДМИТРИЙ",
        phone: "",
        email: ""
    }   
});    
    
post47.save(function(err, result) {
    if(err) throw err;
});


post48.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 25');


var milano = new Cafe({
    title: "Cafe «Milano (Милано)»",
    address: {
        unit: "",
        house: "19",
        street: "ул. Володарского",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.8962128,
        lng: 27.5511923
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/26.кафе_милано.jpg",
    rating: 4.5,
    schedule: {
        mn: "08:00-00:00",
        tu: "08:00-00:00",
        we: "08:00-00:00",
        th: "08:00-00:00",
        fr: "08:00-00:00",
        sa: "08:00-00:00",
        su: "08:00-00:00"
    }
});

milano.save(function(err){
   if(err) throw err;
});


var post49 = new Post({
    cafeID: milano._id,
    text: "Провели чудесный вечер в этом кафе. Уютно, душевно и очень удобно в самом центре Минска. Приятная атмосфера, вежливый персонал. Винная карта внушительная. Еда очень вкусная. Из закусок особенно понравились обоженные перцы, а основное блюдо 'Окунь' был просто замечательный. Десерты в этом кафе - это что-то особенное. Спасибо всем за отличный вечер.",
    rate: 4.5,
    user: {
        name: "СВЕТЛАНА",
        phone: "",
        email: ""
    }
});
var post50 = new Post({
    cafeID: milano._id,
    text: "Был очень удивлён тем, что нельзя взять десерт в 12 дня в воскресенье. Причём администратор с каменным лицом просто говорит нет. Если хотите десерт, избегайте Милано",
    rate: 4.5,
    user: {
        name: "МИХАИЛ",
        phone: "",
        email: ""
    }   
});    
    
post49.save(function(err, result) {
    if(err) throw err;
});


post50.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 26');


var bistro = new Cafe({
    title: "Кафе «Bistro De Luxe (Бистро де люкс)»",
    address: {
        unit: "",
        house: "10",
        street: "ул. Городской Вал",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.9008268,
        lng: 27.5490841
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/27.bistro_de_luxe.jpg",
    rating: 4.6,
    schedule: {
        mn: "08:00-00:00",
        tu: "08:00-00:00",
        we: "08:00-00:00",
        th: "08:00-00:00",
        fr: "08:00-00:00",
        sa: "08:00-00:00",
        su: "08:00-00:00"
    }
});

bistro.save(function(err){
   if(err) throw err;
});


var post51 = new Post({
    cafeID: bistro._id,
    text: "Были на завтраке сегодня. Кухня, обслуживание - высший балл. Спасибо",
    rate: 4.6,
    user: {
        name: "Александр",
        phone: "",
        email: ""
    }
});
var post52 = new Post({
    cafeID: bistro._id,
    text: "Получился прекрасный субботний семейный завтрак. Не удивительно, что кафе пользуется популярностью у минчан. В 11-30 все столики были заняты.",
    rate: 4.6,
    user: {
        name: "Константин",
        phone: "",
        email: ""
    }   
});    
    
post51.save(function(err, result) {
    if(err) throw err;
});


post52.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 27');


var beze = new Cafe({
    title: "Кафе «Безе»",
    address: {
        unit: "пом. 7",
        house: "18",
        street: "пр-т Независимости",
        city: "Минск",
        country: "Беларусь",
        postal: "220000"
    },
    position: {
        lat: 53.8994535,
        lng: 27.5553015
    },
    phone: "",
    email: "",
    website: "",
    photo: "/assets/images/28.кафе безе.jpg",
    rating: 4.0,
    schedule: {
        mn: "11:00-01:00",
        tu: "11:00-01:00",
        we: "11:00-01:00",
        th: "11:00-01:00",
        fr: "11:00-01:00",
        sa: "11:00-01:00",
        su: "11:00-01:00"
    }
});

beze.save(function(err){
   if(err) throw err;
});


var post53 = new Post({
    cafeID: beze._id,
    text: "Отмечала в кафе свой День рождения, была в первый раз. Заранее бронировала столик, поскольку компания была довольно большая (8 человек), всё было исполнено в лучшем виде. Уютная атмосфера, удобные для компании места, внимательное обслуживане. Выбор блюд и напитков - на любой вкус, даже глаза разбегались, когда выбирали заказы :) ",
    rate: 4.0,
    user: {
        name: "Алина",
        phone: "",
        email: ""
    }
});
var post54 = new Post({
    cafeID: beze._id,
    text: "Все очень понравилось! Обслуживание на высоте! Десерты просто бесподобные! Обязательно придем еще раз!!! Спасибо)",
    rate: 4.0,
    user: {
        name: "ЕЛИЗАВЕТА",
        phone: "",
        email: ""
    }   
});    
    
post53.save(function(err, result) {
    if(err) throw err;
});


post54.save(function(err, res) {
    if(err) throw err;
});
console.log('saved 28');

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