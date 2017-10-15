import create from './create';

export default function promisify<T>(
  f: (cb: (err: any, res: T) => void) => void
): () => Promise<T>;
export default function promisify<A, T>(
  f: (arg: A, cb: (err: any, res: T) => void) => void
): (arg: A) => Promise<T>;
export default function promisify<A, A2, T>(
  f: (arg: A, arg2: A2, cb: (err: any, res: T) => void) => void
): (arg: A, arg2: A2) => Promise<T>;

export default function promisify(originalFunction: any, thisContext?: any) {
  return function() {
    const args = Array.prototype.slice.call(arguments);

    return create((resolve: any, reject: any) => {
      function callback(err: any, result: any) {
        if (err !== null) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      originalFunction.apply(thisContext, args.concat(callback));
    });
  };
}
