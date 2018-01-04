let PIXI = require("pixi.js");

let image = require("./image");

function makeCanvas() {
	let canvas = document.createElement("canvas");
	canvas.width = 220;
	canvas.height = 220;
	return canvas;
}

let canvas = makeCanvas();
let context = canvas.getContext("2d");

function drawImage() {
	// let canvas = makeCanvas();
	// let context = canvas.getContext("2d");
	context.drawImage(image.img, 0, 0);
	return canvas;
}

function fillRect() {
	// let canvas = makeCanvas();
	// let context = canvas.getContext("2d");
	let pattern = context.createPattern(image.img, "no-repeat");
	context.fillStyle = pattern;
	context.fillRect(0, 0, 220, 220);
	return canvas;
}

function fillRectPremadePattern() {
	// let canvas = makeCanvas();
	// let context = canvas.getContext("2d");
	context.fillStyle = image.pattern;
	context.fillRect(0, 0, 220, 220);
	return canvas;
}

function putImageData() {
	// let canvas = makeCanvas();
	// let context = canvas.getContext("2d");
	context.putImageData(image.data, 0, 0);
	return canvas;
}

function r() {
	// console.log("pixi ready");
}
PIXI.loader
	.add("color.jpg")
	.add("sprites.json")
	.load(r);

let app = new PIXI.Application({ width: 220, height: 220 });
function pixiApp() {
	let texture = PIXI.utils.TextureCache["color.jpg"];
	let sprite = new PIXI.Sprite(texture);
	app.stage.addChild(sprite);
	app.renderer.render(app.stage);

	for (var i = pixistage.children.length - 1; i >= 0; i--) {
		pixistage.removeChild(pixistage.children[i]);
	}
	return app.view;
}

let pixicanvas = makeCanvas();
renderer = PIXI.autoDetectRenderer(220, 220, {
	view: pixicanvas
});
function pixiMakeStage() {
	let stage = new PIXI.Container();
	let texture = PIXI.utils.TextureCache["color.jpg"];
	let sprite = new PIXI.Sprite(texture);
	stage.addChild(sprite);
	renderer.render(stage);
	return pixicanvas;
}
let pixistage = new PIXI.Container();
function pixi() {
	let texture = PIXI.utils.TextureCache["color.jpg"];
	let sprite = new PIXI.Sprite(texture);
	pixistage.addChild(sprite);
	renderer.render(pixistage);

	for (var i = pixistage.children.length - 1; i >= 0; i--) {
		pixistage.removeChild(pixistage.children[i]);
	}
	return pixicanvas;
}

module.exports = {
	makeCanvas,
	drawImage,
	fillRect,
	fillRectPremadePattern,
	putImageData,
	pixiApp,
	pixiMakeStage,
	pixi
};
