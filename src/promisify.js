const create = require('./create');

module.exports = originalFunction => function() {
    return create((resolve, reject) => {
        function callback() {
            if (arguments.length > 0 && arguments[0]) {
                reject(arguments[0]);
            } else {
                resolve(Array.prototype.slice.call(arguments, 1));
            }
        }

        try {
            originalFunction.apply(this, Array.prototype.slice.call(arguments).concat(callback));
        } catch (error) {
            reject(error);
        }
    });
};
