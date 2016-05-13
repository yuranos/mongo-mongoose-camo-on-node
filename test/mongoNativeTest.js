/**
 * Created by ino on 1/28/2016.
 */
"use strict";

var init = require("../init");
var create = require("../crud/create");

describe('Mongo Native Driver test', function () {

    before('init with mongoimport', function (done) {
        console.log("Initializing DB\n");
        init.dbInit(done);
    });

    it('Adding a new record with callback', function(done){
        create.insert(done);
    });

    it('Editing a record with promise');
    it('Editing a record with co function');

    it('Aggregate with callback');
    it('Aggregate with promise');
    it('Aggregate with co function');

    it('MapReduce with callback');
    it('MapReduce with promise');
    it('MapReduce with co function');

    //after('tearing down db with db.dropDatabase', function (done) {
    //    console.log("\nCleaning up DB");
    //    init.dbTearDown(done);
    //});
});



