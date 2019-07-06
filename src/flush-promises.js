const create = require('./create');

const scheduler = typeof setImmedate === 'function' ? setImmediate : setTimeout;

module.exports = function flushPromises() {
  return create(resolve => scheduler(resolve));
};
