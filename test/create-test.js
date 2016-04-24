const assert = require('assert');

const sinon = require('sinon');

const create = require('../src/create');

describe('create', () => {
    it('creates a new promise with the provided executor', () => {
        const executor = sinon.spy();

        const promise = create(executor);

        assert(executor.calledOnce);
        assert(typeof promise.then, 'function');
        assert(typeof promise.catch, 'function');
    });
});
