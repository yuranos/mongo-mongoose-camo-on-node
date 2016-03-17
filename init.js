/**
 * Created by ino on 1/28/2016.
 */
"use strict";

//mongoimport --db test --collection docs --file example2.json
//mongoimport --db users --collection contacts --file contacts.json
//mongoimport --db test --collection restaurants --drop --file primer-dataset.json
//mongoimport --db <db-name> --collection <coll-name> --type json --file seed.json --jsonArray

var MongoClient = require('mongodb').MongoClient,
        Server = require('mongodb').Server,
        cp = require('child_process');

var db = exports.db;

//var connectionFunction = function (err, db, callback) {
//    assert.equal(null, err);
//    console.log("Connected correctly to server");
//    exports.db = db;
//    callback(db);
//}

exports.dbInit = function() {
    var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
     //Open the connection to the server
    mongoclient.open(function(err, mongoclient) {
        // Get the first db and do an update document on it
        mongoclient.db("countries");
    });
    mongoclient.close();

    //--db <db-name> --collection <coll-name> --type json --file seed.json --jsonArray
    // Set up the connection to the local db
    var mongoimport = cp.spawn('mongoimport',['--db countries', '--collection countries', '--type json',
        '--file resource/test_data.json', '--jsonArray']);

    mongoimport.stdout.on('data',function(data) {
        console.log('child:: ' + String(data));
    });
}

exports.dbTearDown = function() {

}
