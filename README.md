# Promalom

A very tiny promise util library, designed to work with native Promise functionality. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

Very small in file size, very specific in functionality.

[![npm version](https://img.shields.io/npm/v/promalom.svg?style=flat-square)](https://www.npmjs.com/package/promalom)

# Usage

You can either import the whole library or just specific functions if you prefer explicit dependencies.

```js
// import the whole library
const P = require('promalom');

// requiring individual functions through destructuring
const { create, wait, series } = require('promalom'); 

// requiring individual functions from their source files
const series = require('promalom/src/series'); 
```

## Functions

### Create

Exactly the same as `new Promise`

```js
P.create(executor);
P.create((resolve, reject) => { ... });
```

### Promisify

Convert a callback return function to return a promise. The callback must be the last parameter.

```js
const fs = require('fs');

const readFileP = P.promisify(fs.readFile);

readFileP('/etc/passwd').then((err, data) => {
    ...
});
```

### Series

Run the specified promise returning functions in series. Ensures the previous promise is resolved before starting the current.

```js
P.series([myPromiseReturningFunction, anotherPromiseReturningFunction, someOtherPromiseReturningFunction]);
```

### Wait

Wait the specified time in milliseconds and then resolve. Wraps setTimeout.

```js
P.wait(20);
```

## Further examples

### Call a promise returning function with timeout of 1 second

```js
Promice.race(P.wait(1000), promiseReturningFunction);
```

### Upload files one at a time
Assuming `uploadFile` is a function that takes the filename and returns a promise that resolves once uploaded

```js
const fileNames = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

P.series(fileNames.map(fileName => {
    return () => uploadFile(fileName); 
}));
```
