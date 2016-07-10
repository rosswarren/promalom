const create = require('./create');

module.exports = originalFunction => (...originalFunctionArgs) => create((resolve, reject) => {
  function callback(...callbackArgs) {
    if (callbackArgs.length > 0 && callbackArgs[0]) {
      reject(callbackArgs[0]);
    } else {
      resolve.apply(null, Array.prototype.slice.call(callbackArgs, 1));
    }
  }

  try {
    originalFunction.apply(this, Array.prototype.slice.call(originalFunctionArgs).concat(callback));
  } catch (error) {
    reject(error);
  }
});
