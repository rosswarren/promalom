const create = require('./create');

module.exports = timeout => create(resolve => setInterval(resolve, timeout));
