const assert = require('assert');
const fs = require('fs');

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

    it('works for fs.readFile', () => {
        const readFileP = promisify(fs.readFile);

        return readFileP('README.md', 'utf8').then(contents => {
            assert.equal(contents.slice(0, 10), '# Promalom');
        });
    });

    it('works for fs.readFile when it errors', () => {
        const readFileP = promisify(fs.readFile);

        return readFileP('SOME_MISSING_FILE.md', 'utf8').catch(error => {
            assert.equal(typeof error, 'object');
            assert.equal(
                error.message,
                'ENOENT: no such file or directory, open \'SOME_MISSING_FILE.md\''
            );
        });
    });
});
