const create = require('../src/create');

describe('create', () => {
  it('creates a new promise with the provided executor', () => {
    const executor = jest.fn();

    const promise = create(executor);

    expect(executor).toHaveBeenCalledTimes(1);
    expect(typeof promise.then).toBe('function');
    expect(typeof promise.catch).toBe('function');
  });
});
