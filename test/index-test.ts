import { assert } from 'chai';

import * as P from '../src/index';

import { create, promisify, series, wait } from '../src/index';

describe('index', () => {
  it('is available as one giant import', () => {
    assert.isObject(P);
    assert.isFunction(P.create);
    assert.isFunction(P.promisify);
    assert.isFunction(P.series);
    assert.isFunction(P.wait);
  });

  it('is available as seperate functions through destructuring', () => {
    assert.isFunction(create);
    assert.isFunction(promisify);
    assert.isFunction(series);
    assert.isFunction(wait);
  });
});
