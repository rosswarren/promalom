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

    it('should pass the value of the previous to the current', () => {
        const first = () => Promise.resolve(2);
        const second = a => Promise.resolve(a + 6);
        const third = a => Promise.resolve(a + 22);

        return series([first, second, third]).then(result => {
            assert.equal(result, 30);
        });
    });
});
