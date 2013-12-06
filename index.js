var Promise = require('bluebird')

module.exports = function Promesa(fn) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(fn())
    } catch (e) {
      reject(e)
    }
  })
}