'use strict';

// ==============================================================================
//                       Search - used for search
// ==============================================================================

var router = require('express').Router(),
    bodyParser = require('body-parser'),
    _   = require('lodash'),
    result,
    filterResult,
    locations;

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    console.log('request search term: ', req.body);

    locations = [
        {lat: 52.511, lng: 13.447, zone: 'mirpur', desc: 'choga', price: 1},
        {lat: 52.549, lng: 13.422, zone: 'mohakhali', desc: 'choga', price: 2},
        {lat: 52.497, lng: 13.396, zone: 'banani', desc: 'choga', price: 3},
        {lat: 52.517, lng: 13.394, zone: 'uttora', desc: 'choga', price: 4}
    ];

    filterResult = _.filter(locations, function (loc) {
        console.log(req.body.term);
        return loc.zone.indexOf(req.body.term) > -1;
    });
    console.log('fitered : ', filterResult);
    result = {status: 200, data: filterResult};

    res.send(result);
});

// ============================EXPORTS====================================
// Provides the router that can GENERATES new tokens
exports.router = function () { return router; };
