const Q = require('q')

module.exports = function Promise(fn) {
  return Q.promise(function (resolve, reject) {
    try {
      resolve(fn())
    } catch (e) {
      reject(e)
    }
  })
}