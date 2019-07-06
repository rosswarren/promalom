const wait = require('../src/wait');
const flushPromises = require('../src/flush-promises');

describe('wait', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should wait for the specified time then resolve', async () => {
    let resolved = false;

    wait(5).then(() => {
      resolved = true;
    });

    expect(resolved).toBe(false);

    jest.advanceTimersByTime(5);
    await flushPromises();

    expect(resolved).toBe(true);
  });
});
