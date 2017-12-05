const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const httpStatus = require('http-status');
const appRoot = require('app-root-path');
const expressValidation = require('express-validation');
const routes = require('../routes/index.route');

// const config = require('./config');
// const APIError = require('../helpers/APIError');
// const postCtrl = require('../controllers/post.controller');


// import logger from 'morgan';
// import compress from 'compression';
// import methodOverride from 'method-override';
// import cors from 'cors';
// import expressWinston from 'express-winston';
// import winstonInstance from './winston';
// import helmet from 'helmet';


const app = express();

/*if (config.env === 'development') {
    app.use(logger('dev'));
}*/

// parse body params 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
// app.use(compress());
// app.use(methodOverride());

// app.use(cors());

/*if (conf.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
}*/
// point static path to dist
app.use(express.static(path.join(appRoot.path, 'dist')));
// set api routes
app.use('/api', routes);
// catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(appRoot.path, 'dist/index.html'))
});

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        const undefinedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
        const error = new APIError(undefinedErrorMessage, err.status, true);
        return next(error);
    } else if (!(err instanceof APIError)) {
        const apiError = new APIError(err.message, err.status, err.isPublic);
        return next(apiError);
    }
    return next(err);
});

app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});

/*app.use(expressWinston.errorLogger({
    winstonInstance
}));
*/
app.use((err, req, res, next) => 
    res.status(err.status).json({
        message: err.isPublic ? err.message : httpStatus[err.status],
        //stack: conf.env === 'development' ? err.stack : {}
        stack: err.stack
    })
);

module.exports = app;
