var assert = require('assert');

describe("bloom filter spellcheck function", function () {
    var spellcheck = require("../lib/bloom");

    it("should return true when a given word is spelled correctly", function () {
        this.timeout(20000);
        assert.equal(true, spellcheck('apple'));
        assert.equal(true, spellcheck('banana'));
        for(var i = 1; i < 16; i = i + 2) {
            assert.equal(true, spellcheck('apple', i));
            assert.equal(true, spellcheck('banana', i));
        }
    });

    it("should return false when a given word is not spelled correctly", function() {
        this.timeout(20000);
        assert.equal(false, spellcheck('appizzle'));
        assert.equal(false, spellcheck('bizznana'));
        // we get false positives for length less than 5
        for(var i = 5; i < 16; i = i + 2) {
            assert.equal(false, spellcheck('appizzle', i));
            assert.equal(false, spellcheck('bizznana', i));
        }
    });
});
