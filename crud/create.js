#!/bin/bash

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


exports.insert = function (callback) {
// Connection URL
    var url = 'mongodb://localhost:27017/countries_db';
// Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        // Get the collection
        var usa = {
            "country": "USA",
            "capital": "Washington DC",
            "population": 322400000,
            "picture": "resource/USA.jpg",
            "location": {
                "type": "Point",
                "coordinates": [
                    -90,
                    25
                ]
            },
            "ethnicity": [
                {
                    "white": "72%"
                },
                {
                    "african": "13%"
                },
                {
                    "asian": "5%"
                },
                {
                    "native": "1%"
                }
            ]
        };

        var countries = db.collection('countries');
        countries.insertOne(usa, function(err, result) {
            assert.equal(null, err);
            assert.equal(1, result.insertedCount);
            // Finish up test
            db.close(callback);
        });
    });
};
