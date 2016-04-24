const create = require('./create');

module.exports = originalFunction => function() {
    return create((resolve, reject) => {
        try {
            originalFunction.apply(this, Array.prototype.slice.call(arguments).concat(resolve));
        } catch (error) {
            reject(error);
        }
    });
};
