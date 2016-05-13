/**
 * Created by ino on 1/28/2016.
 */
"use strict";

var init = require("../init");

describe('Mongo init script', function () {

    //before(function () {
    //    console.log("Initializing DB\n");
    //});
    //
    ////it('init with Promise', function (done) {
    ////    let files = yield fs.readdir('markdown');
    ////    let tasks = files.map(function(file) {
    ////        return co(md2html('markdown/' + path.basename(file, '.md')));
    ////    });
    ////    yield Promise.all(tasks);
    ////});
    //
    //it('init with callback', function (done) {
    //    var MongoClient = require('mongodb').MongoClient,
    //        test = require('assert');
    //    console.log("1\n");
    //    //, { server: { auto_reconnect: true } }
    //    MongoClient.connect('mongodb://localhost:27017/session').then(function (db) {
    //        // This line is never called
    //        console.log("2\n");
    //        // Get the collection
    //        var col = db.collection('insert_many_with_promise');
    //        col.insertMany([{a: 1}, {a: 2}]).then(function (r) {
    //            console.log("3\n");
    //            test.equal(2, r.insertedCount);
    //            // Finish up test
    //            db.close();
    //            done();
    //        });
    //    }).catch(function (error) {
    //        console.info(error);
    //        done(error);
    //    });
    //});
    //
    //
    //after(function () {
    //    console.log("Cleaning up DB");
    //});

});



