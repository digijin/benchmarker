let addReporter = require("./addReporter");

let image = require("./image");

let fns = require("./oneDrawFunctions");

var suite = new Benchmark.Suite("One Draw");
// add tests
suite
	.add("drawImage", function() {
		fns.drawImage();
	})
	.add("fillRect", function() {
		fns.fillRect();
	})
	.add("fillRectPremadePattern", function() {
		fns.fillRectPremadePattern();
	})
	.add("putImageData", function() {
		fns.putImageData();
	})
	.add("pixi", function() {
		fns.pixi();
	});

module.exports = addReporter(suite);
