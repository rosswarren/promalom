const flushPromises = require('../src/flush-promises');

describe('flushPromises', () => {
  it('should flush all pending promises', async () => {
    let value;

    Promise.resolve(10).then((n) => {
      value = n;
    });

    await flushPromises();

    expect(value).toBe(10);
  });
});
