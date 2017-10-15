import * as sinon from 'sinon';
import { assert } from 'chai';

import create from '../src/create';

describe('create', () => {
  it('creates a new promise with the provided executor', () => {
    const executor = sinon.spy();

    const promise = create(executor);

    assert.isTrue(executor.calledOnce);
    assert.isFunction(promise.then);
    assert.isFunction(promise.catch);
  });
});
