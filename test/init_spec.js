/**
 * Created by ino on 1/28/2016.
 */
"use strict";

var init = require("../init");

describe('Mongo init script', function () {

    before(function () {
        console.log("Initializing DB\n");
    });

    it('init db', function () {
        init.dbInit();
    });

    //it('teardown db', function () {
    //    init.dbTearDown();
    //});

    after(function () {
        console.log("Cleaning up DB");
    });

    //afterAll (done) ->
    //setTimeout((-> delete window.globalCondition), 1000)
});



