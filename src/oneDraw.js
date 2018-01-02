let addReporter = require('./addReporter')

let image = require('./image')

let fns = require('./oneDrawFunctions')


var suite = new Benchmark.Suite('One Draw');
// add tests
suite.add('drawImage', function () {
        fns.drawImage()
    })
    .add('fillRect', function () {
        fns.fillRect()
    })
    .add('fillRectPremadePattern', function () {
        fns.fillRectPremadePattern()
    })
    .add('putImageData', function () {
        fns.putImageData()
    })
// add listeners
//   .on('cycle', function(event) {
//     console.log(event.currentTarget.name, String(event.target));
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // run async
//   .run({ 'async': true });

module.exports = addReporter(suite);