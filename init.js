/**
 * Created by ino on 1/28/2016.
 */
"use strict";

var mongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var connectionFunction = function (err, db, callback) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
    this.apply(db);
}

function dbInit() {
    // Connection URL
    var url = 'mongodb://localhost:27017/cities';
    // Use connect method to connect to the Server
    mongoClient.connect(url, connectionFunction(err, db, (db) => {db.close();}));
    mongoClient.connect(url, connectionFunction(err, db, (err, db) => connectionFunction(err, db, )));
}

function dbTearDown() {
    // Use connect method to connect to the Server
    MongoClient.connect(url, connectionFunction(err, db, (db) => {db.close();}));
}

export {dbInit, dbTearDown};