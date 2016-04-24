const assert = require('assert');

const series = require('../src/series');
const wait = require('../src/wait');

describe('series', () => {
    it('runs promises in series', () => {
        const results = [];

        const waitAndPush = (time, value) => () => wait(time).then(results.push(value));

        const funcs = [
            waitAndPush(5, 'a'),
            waitAndPush(1, 'b'),
            waitAndPush(6, 'c'),
            waitAndPush(1, 'd')
        ];

        return series(funcs).then(() => {
            assert.deepEqual(results, ['a', 'b', 'c', 'd']);
        });
    });
});
