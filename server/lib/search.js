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
        {lat: 23.826, lng: 90.391, zone: 'manikdi', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 700},
        {lat: 23.83381, lng: 90.36945, zone: 'mirpur-11', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 150},
        {lat: 23.816, lng: 90.391, zone: 'manikdi', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 600},
        {lat: 23.845, lng: 90.36945, zone: 'mirpur-11', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 350},
        {lat: 23.856, lng: 90.391, zone: 'manikdi', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 400},
        {lat: 23.851, lng: 90.395, zone: 'manikdi', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 440},
        {lat: 23.865, lng: 90.36945, zone: 'mirpur-11', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 165},
        {lat: 23.846, lng: 90.391, zone: 'matikata', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 80},
        {lat: 23.844, lng: 90.400, zone: 'matikata', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 250},
        {lat: 23.866, lng: 90.345, zone: 'manikdi', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 420},
        {lat: 23.840, lng: 90.320, zone: 'mirpur-10', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 190},
        {lat: 23.846, lng: 90.391, zone: 'mirpur-10', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 260},
        {lat: 23.841, lng: 90.399, zone: 'mirpur-10', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 50}
    ];

    return _.filter(locations, function (loc) {
        return loc.zone.indexOf(term) > -1;
    });
};

getZones = function (term) {
    var zones = ['mirpur-11', 'manikdi', 'mirpur-10', 'matikata'];

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
