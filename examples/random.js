const rnd = require('../');

var random = rnd.random();
console.info('******** jm.random *********');
random.seed = Date.now();
console.info(random.randomInt(2));
console.info(random.randomInt(1, 2));
console.info(random.randomDouble(2));
console.info(random.randomDouble(1, 2));
