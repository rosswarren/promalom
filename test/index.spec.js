const P = require('../index');
const {
  create, flushPromises, promisify, series, wait
} = require('../index');

describe('index', () => {
  it('is available as one giant import', () => {
    expect(typeof P).toBe('object');
    expect(typeof P.create).toBe('function');
    expect(typeof P.flushPromises).toBe('function');
    expect(typeof P.promisify).toBe('function');
    expect(typeof P.series).toBe('function');
    expect(typeof P.wait).toBe('function');
  });

  it('is available as seperate functions through destructuring', () => {
    expect(typeof create).toBe('function');
    expect(typeof flushPromises).toBe('function');
    expect(typeof promisify).toBe('function');
    expect(typeof series).toBe('function');
    expect(typeof wait).toBe('function');
  });
});
