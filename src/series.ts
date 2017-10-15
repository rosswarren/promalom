export default (funcs: Array<any>) => {
  if (Array.isArray(funcs) && funcs.length > 0) {
    return funcs.splice(1).reduce((acc, curr) => acc.then(curr), funcs[0]());
  }

  return Promise.resolve();
};
