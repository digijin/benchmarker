let addReporter = require("./addReporter");

let image = require("./image");

let fns = require("./oneDrawFunctions");

var suite = new Benchmark.Suite("One Draw on existing canvas");
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
	})
	.add("pixiMakeStage", function() {
		fns.pixiMakeStage();
	})
	.add("pixiApp", function() {
		fns.pixiApp();
	});

module.exports = addReporter(suite);
