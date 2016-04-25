const assert = require('assert');

const promisify = require('../src/promisify');

describe('promisify', () => {
    it('converts functions that use callbacks to promise returning functions', () => {
        const callbackFunc = (a, b, callback) => {
            callback(null, a + b);
        };

        const promisedFunc = promisify(callbackFunc);

        return promisedFunc(2, 5).then((result) => {
            assert.equal(result, 7);
        });
    });

    it('converts exceptions to rejections', () => {
        const callbackFunc = () => {
            throw new Error('oh no');
        };

        const promisedFunc = promisify(callbackFunc);

        return promisedFunc(2, 5).catch((error) => {
            assert.equal(typeof error, 'object');
            assert.equal(error.message, 'oh no');
        });
    });

    it('converts error param to rejections', () => {
        const callbackFunc = (a, b, callback) => {
            callback(new Error('oh no'));
        };

        const promisedFunc = promisify(callbackFunc);

        return promisedFunc(2, 5).catch((error) => {
            assert.equal(typeof error, 'object');
            assert.equal(error.message, 'oh no');
        });
    });
});
