/**
 * Created by ino on 1/28/2016.
 */

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/session';

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('friends');
    collection.find().sort({"firstname" : -1}).toArray((err, items) => {
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

//TODO: sort,
//db.articles.find( { $text: { $search: "coffee" } } )
//$db.friends.find({firstname : {$regex : “Yu”}})
//db.collection.find( { field: { $gt: value1, $lt: value2 } } );
//$db.students.find({},{“field_name”: {$slice : [10, 8]}})
//db.friends.find({},{"sports.mysports" : {$slice : 1}})
//geoNear

