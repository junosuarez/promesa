# promesa
easiest way to return a promise from a function

*"promesa" is Spanish for "promise"*

## usage
```js
var Promise = require('promesa')

// (Number) => Promise<User>
function getUser(id) {
  return Promise(function () {
    if (!(typeof id === 'number' && Number.isFinite(id) && !Number.isNaN(id))) {
      throw new TypeError('id must be a number')
    }

    return {id: id, name: 'Boris Yeltsin'}
  })
}
```
In a real implementation, you would probably have some sort of
underlying asynchronous value, like a database lookup.

`Promise` lets you mix and match returning Promise values,
synchronous values, and throwing. As explained in
[You're missing the point of promises][1], Promises/A+ lets
you reason about your code in terms of `return` and `throw`
semantics you already know and love.

The npm package name is `promesa`, but it will probably make your code more readable to require it as `promise` or `Promise` as shown in the example.

[1]: https://gist.github.com/domenic/3889970

## FAQ

### When should I use `promesa` instead of another way of making a promise?

Promesa is ideal for making functions which are working with other promises as well as synchronous logic, for example precondition (guard) checking, authorization logic, etc. It assumes that any asynchronous values you're working with are already represented as Promises.

If you need to create promises from other kinds of asynchronous control flow patterns, such as EventEmitters or callback continuations, consider using something like `Q.promise`

## api

### `promesa: (fn: Function<T>) => Promise<T>`

Invokes the function `fn` and wraps the result in a Promise.
If `fn` returned a Promise, that value will be flattened and returned
(see the [Promise Resolution Procedure][2]). If `fn` returned a
value, a resolved Promise of that value will be returned. If `fn`
throws, a rejected Promise will be returned.

[2]: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure

## installation

    $ npm install promesa


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) MMXIII jden <jason@denizac.org>. See LICENSE.md
