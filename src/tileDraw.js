let addReporter = require('./addReporter')

let image = require('./image')

let fns = require('./tileDrawFunctions')


var suite = new Benchmark.Suite('Tiled Draw');
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


module.exports = addReporter(suite);