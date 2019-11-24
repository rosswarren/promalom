const create = require('./create');

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

module.exports = function flushPromises() {
  return create(resolve => scheduler(resolve));
};
