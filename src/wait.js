const create = require('./create');

module.exports = timeout => create(resolve => setTimeout(resolve, timeout));
