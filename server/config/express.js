const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const httpStatus = require('http-status');
const appRoot = require('app-root-path');
const expressValidation = require('express-validation');
const routes = require('../routes/index.route');
const cors = require('cors');
// const config = require('./config');
 const APIError = require('../helpers/APIError');
// const postCtrl = require('../controllers/post.controller');


// import logger from 'morgan';
// import compress from 'compression';
// import methodOverride from 'method-override';
// import cors from 'cors';
// import expressWinston from 'express-winston';
// import winstonInstance from './winston';
// import helmet from 'helmet';


const app = express();
app.options('*', cors());
/*if (config.env === 'development') {
    app.use(logger('dev'));
}*/
app.use(function(req, res, next) {
  
    if('OPTIONS' === req.method) {
        console.log('request catch options',req);
      res.set('Access-Control-Allow-Origin', req.get('Origin'));
      res.set('Access-Control-Allow-Headers', 'Accept, Content-Type');
      
      res.send(200);
    } else{
        next();
    }
    
  });
// parse body params 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(cookieParser());
// app.use(compress());
// app.use(methodOverride());

// app.use(cors());

/*if (conf.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
}*/

// set api routes
app.use('/api', routes);
// point static path to dist
app.use(express.static(path.join(appRoot.path, 'dist')));

// catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(appRoot.path, 'dist/index.html'))
});
app.disable('etag');
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
        } else {
          next();
        }
    next();
  });*/
/*app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
  });*/
/*app.get('/api/*', function(req, res, next){ 
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next(); 
  });*/
  
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
app.use((err, req, res, next) => {
    console.log(err);
    if(err.status >= 100 && err.status < 600){   
        res.status(err.status).json({
            message: err.isPublic ? err.message : httpStatus[err.status],
            //stack: conf.env === 'development' ? err.stack : {}
            stack: err.stack
        });
    }
    else {
        res.status(500).json({
            message: err.isPublic ? err.message : httpStatus[err.status],
            //stack: conf.env === 'development' ? err.stack : {}
            stack: err.stack
        });
    }
}
);

module.exports = app;
