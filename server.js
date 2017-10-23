const mongoose = require('mongoose');

const config = require('./server/config/config');
const app = require('./server/config/express');

Promise = require('bluebird');

 mongoose.Promise = Promise;

//connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});


app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
});

//module.exports = app;