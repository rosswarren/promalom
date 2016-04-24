const assert = require('assert');

const P = require('../index');
const { create, series, wait } = require('../index');

describe('index', () => {
    it('is available as one giant import', () => {
        assert.equal(typeof P, 'object');
        assert.equal(typeof P.create, 'function');
        assert.equal(typeof P.series, 'function');
        assert.equal(typeof P.wait, 'function');
    });

    it('is available as seperate functions through destructuring', () => {
        assert.equal(typeof create, 'function');
        assert.equal(typeof series, 'function');
        assert.equal(typeof wait, 'function');
    });
});
