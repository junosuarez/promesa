var chai = require('chai')
chai.should()
var Q = require('q')

describe('promesa', function () {
  var Promise = require('../')
  
  it('example', function (done) {

    function getUser(id) {
      return Promise(function () {
        if (!(typeof id === 'number' && Number.isFinite(id) && !Number.isNaN(id))) {
          throw new TypeError('id must be a number')
        }

        return {id: id, name: 'Boris Yeltsin'}
      })
    }

    Q.all([
      getUser(23).then(function (val) {
        val.should.deep.equal({
          id: 23,
          name: 'Boris Yeltsin'
        })
      }),
      getUser('asdfs').then(function () {
        throw new Error('should not resolve')
      }, function (err) {
        err.should.be.instanceof(TypeError)
        err.message.should.equal('id must be a number')
      })
    ])
    .then(function () { done() }, done)

    

  })
})