const mongoose = require('mongoose');

//const routes = require('./routes/index.route');
const app = require('./config/express');
const config = require('./config/config');

mongoose.Promise = global.Promise;
//connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { useMongoClient: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});


app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
});

module.exports = app;