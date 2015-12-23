var assert = require('assert');

describe("helloWorld", function () {
    var greet = require("../lib/greet");

    it("should greet the named person", function () {
        assert.equal(greet("World"),"Hello World!");
    });

});
