'use strict'

const benchmark = require('benchmark')
const crypto = require('crypto')
const rnd = require('../lib')

const random = rnd.random()

const suite = new benchmark.Suite()

suite
  .add('random', () => {
    random.random()
  })
  .add('randomInt', () => {
    random.randomInt()
  })
  .add('randomDouble', () => {
    random.randomDouble()
  })
  .add('randomOdds', () => {
    random.randomOdds(100, 5)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })

if (require.main === module) {
  suite.run({async: true})
} else {
  module.exports = suite
}
