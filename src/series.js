module.exports = funcs => funcs.splice(1).reduce((acc, curr) => acc.then(curr()), funcs[0]());
