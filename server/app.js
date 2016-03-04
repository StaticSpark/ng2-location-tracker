/* global __appRoot */
/*============================================================================
                          Application setup
==============================================================================*/

// global variable to set relative path from /server/
global.__base = __dirname + '/';

// Call the packages we need
var express = require('express'),
    cors = require('cors'),
    app = express(),
    // Register static route for client files when /static/**** is route
    compression = require('compression'),
    publicRouter;

// use compression
app.use('/node_modules', compression());
app.use('/dist', compression());
app.use('/dist', express.static(__appRoot + '/dist'));
app.use('/', compression());
app.use('/', express.static(__appRoot + '/dist'));

// enable cors
app.use(cors());

// register public routes
publicRouter = require('./router/public').router();
app.use(publicRouter);

// ========================= Export application ==============================
exports.app = function () { return app; };
