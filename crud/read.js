/**
 * Created by ino on 1/28/2016.
 */
//db.friends.find({firstname : {$regex : “Yu”}})

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/session';

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('friends');
    collection.find().toArray((err, items) => {
        "use strict";
        console.log(err);
        console.log(items);
    });
}

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    findDocuments(db, function() {
        db.close();
    });
});