'use strict';

// ==============================================================================
//                       Search - used for search
// ==============================================================================

var router = require('express').Router(),
    bodyParser = require('body-parser'),
    _   = require('lodash'),
    result,
    getLocations,
    getZones;

getLocations = function (term) {
    var locations = [
        {lat: 52.511, lng: 13.447, zone: 'mirpur', desc: 'choga', price: 1},
        {lat: 52.549, lng: 13.422, zone: 'mohakhali', desc: 'choga', price: 2},
        {lat: 52.497, lng: 13.396, zone: 'banani', desc: 'choga', price: 3},
        {lat: 52.517, lng: 13.394, zone: 'uttora', desc: 'choga', price: 4}
    ];

    return _.filter(locations, function (loc) {
        return loc.zone.indexOf(term) > -1;
    });
};

getZones = function (term) {
    var zones = ['mirpur-1', 'mohammadpur', 'mirpur-2', 'motijil', 'mohininogor', 'motipur', 'mirpur-3'];

    return _.filter(zones, function (zone) {
        return zone.indexOf(term) > -1;
    });
};

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    result = {status: 200, data: getLocations(req.body.term)};
    res.send(result);
});

router.get('/:term', function (req, res) {
    result = {status: 200, data: getZones(req.params.term)};
    res.send(result);
});

// ============================EXPORTS====================================
// Provides the router that can GENERATES new tokens
exports.router = function () { return router; };
