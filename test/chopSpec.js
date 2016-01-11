var assert = require('assert');

describe("binary search function", function () {
    var chop = require("../lib/chop");

    it("should find the index of the requested int when present in the array", function () {
        assert.equal(0,  chop(1, [1]));
        assert.equal(0,  chop(1, [1, 3, 5]));
        assert.equal(1,  chop(3, [1, 3, 5]));
        assert.equal(2,  chop(5, [1, 3, 5]));
        assert.equal(0,  chop(1, [1, 3, 5, 7]));
        assert.equal(1,  chop(3, [1, 3, 5, 7]));
        assert.equal(2,  chop(5, [1, 3, 5, 7]));
        assert.equal(3,  chop(7, [1, 3, 5, 7]));
    });

    it("should return -1 when the requested int is not present in the array", function() {
        assert.equal(-1, chop(3, []));
        assert.equal(-1, chop(3, [1]));
        assert.equal(-1, chop(0, [1, 3, 5]));
        assert.equal(-1, chop(2, [1, 3, 5]));
        assert.equal(-1, chop(4, [1, 3, 5]));
        assert.equal(-1, chop(6, [1, 3, 5]));
        assert.equal(-1, chop(0, [1, 3, 5, 7]));
        assert.equal(-1, chop(2, [1, 3, 5, 7]));
        assert.equal(-1, chop(4, [1, 3, 5, 7]));
        assert.equal(-1, chop(6, [1, 3, 5, 7]));
        assert.equal(-1, chop(8, [1, 3, 5, 7]));
    });
});
