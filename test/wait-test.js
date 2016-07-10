const assert = require('assert');

const wait = require('../src/wait');

describe('wait', () => {
  it('should wait for the specified time then resolve', () => {
    const time = Date.now();

    return wait(5).then(() => {
      const newTime = Date.now();

      assert(newTime - time >= 4);
      assert(newTime - time <= 6);
    });
  });
});
