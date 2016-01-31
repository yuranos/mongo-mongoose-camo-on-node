/**
 * Created by ino on 1/28/2016.
 */

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/session';
// Use connect method to connect to the Server
var connectionFunction = function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
};
MongoClient.connect(url, connectionFunction);
