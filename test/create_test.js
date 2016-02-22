/**
 * Created by ino on 1/28/2016.
 */
"use strict";

describe('JavaScript addition operator', function () {

    //beforeAll (done) ->
    //setTimeout((-> window.globalCondition = new Foobar(); done()), 10)

    beforeEach(function () {
        console.log("Initializing DB");
    });

    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(4);
    });

    beforeEach(function () {
        console.log("Cleaning up DB");
    });

    //afterAll (done) ->
    //setTimeout((-> delete window.globalCondition), 1000)
});



