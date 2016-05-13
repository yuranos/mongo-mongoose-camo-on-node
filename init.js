/**
 * Created by ino on 1/28/2016.
 */
"use strict";

var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    exec = require('child_process').exec,
    test = require('assert');

var db = exports.db;

exports.dbInit = function (callback) {
    // Populate Db from the file
    exec('mongoimport --db countries_db --collection countries --file resource/test-data.json --jsonArray', callback);
};

exports.dbTearDown = function (callback) {
    MongoClient.connect('mongodb://localhost:27017/countries_db', function (err, db) {
        // Let's drop the database
        db.dropDatabase(callback);
    });
};
