# Promalom

A very tiny promise util library. Don't try to use it yet.

# Usage

You can either import the whole library or just specific functions if you prefer explicit dependencies.

```js
const P = require('promalom'); // import the whole library
const { create, wait, series } = require('promalom'); // requiring individual functions
const series = require('promalom/src/create'); // requiring individual functions from their source files
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
