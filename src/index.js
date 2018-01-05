let iRandomMax = 200000000000 // 最大随机整数范围 0 <= randomValue <= iRandomMax;

/**
 * Class representing a random.
 */
class Random {
  /**
   * create a random
   * @param {Object} [opts] params
   */
  constructor (opts = {}) {
    this.seed = opts.seed || Date.now()
    this.randomMax = opts.randomMax || iRandomMax
  }

  /**
   *
   * @return {number}
   */
  random () {
    this.seed = (this.seed * 9301 + 49297) % 233280
    return this.seed / (233280.0)
  }

  /**
   * min<=result<=max
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  randomInt (min, max) {
    if (max === undefined) {
      max = min
      min = 0
    }
    let range = min + (this.random() * (max - min + 1))
    return Math.floor(range)
  }

  /**
   * min<=result<=max
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  randomDouble (min, max) {
    if (max === undefined) {
      max = min
      min = 0.0
    }

    let range = min + (this.random() * (max - min))
    return range
  }

  /**
   *
   * @param {number} range
   * @return {number}
   */
  randomRange (range) {
    return this.randomInt(0, this.randomMax) % range
  }

  /**
   *
   * @param {number} range
   * @param {number} odds
   * @return {number}
   */
  randomOdds (range, odds) {
    if (this.randomRange(range) < odds) return 1
    return 0
  }
}

let random = function (opts) {
  return new Random(opts)
}

let moduleRandom = ($, name = 'random') => {
  $.random = function (opts) {
    return new Random(opts)
  }

  return {
    name: name,
    unuse: function () {
      delete $.random
    }
  }
}

export default {
  Random: Random,
  random: random,
  moduleRandom: moduleRandom
}
