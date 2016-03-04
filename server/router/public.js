/*============================================================================
                          Public routes
==============================================================================*/
var router = require('express').Router(),
    bodyParser = require('body-parser'),
    searchRouter = require('../lib/search').router();

// this will let us get the data from a POST
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
router.use('/search', searchRouter);

// ============================EXPORTS====================================
// Provides the public routers
exports.router = function () {return router;};
