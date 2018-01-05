import chai from 'chai'

let expect = chai.expect
import rnd from '../src'

let Random = rnd.Random

let r = new Random()

describe('random', function () {
  it('Random', function () {
    expect(Random).to.be.a('function')
    expect(r.randomInt(2)).to.within(0, 2)
    expect(r.randomInt(1, 2)).to.within(1, 2)
    expect(r.randomDouble(1, 2)).to.within(1, 2)
  })

  it('randomInt qaulity', function () {
    let len = 5
    let m = []
    for (let i = 0; i < len; i++) m[i] = 0
    for (let i = 0; i < 100000; i++) {
      let n = r.randomInt(len - 1)
      m[n]++
    }
    console.log(m)
  })
})
