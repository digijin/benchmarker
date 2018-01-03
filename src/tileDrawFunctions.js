let PIXI = require("pixi.js");

let image = require("./image");

let tileParams = [
	// { src: { x: 0, y: 0, w: 20, h: 20 }, dest: { x: 200, y: 200, w: 20, h: 20 } }
];
let tilesize = 20;
for (let x = 0; x <= 10; x++) {
	for (let y = 0; y <= 10; y++) {
		tileParams.push({
			src: { x: x * tilesize, y: y * tilesize, w: 20, h: 20 },
			dest: { x: 200 - x * tilesize, y: 200 - y * tilesize, w: 20, h: 20 }
		});
	}
}

function makeCanvas() {
	let canvas = document.createElement("canvas");
	canvas.width = 220;
	canvas.height = 220;
	return canvas;
}
function drawImage() {
	let canvas = makeCanvas();
	let context = canvas.getContext("2d");
	tileParams.forEach(p => {
		context.drawImage(
			image.img,
			p.src.x,
			p.src.y,
			p.src.w,
			p.src.h,
			p.dest.x,
			p.dest.y,
			p.dest.w,
			p.dest.h
		);
	});
	return canvas;
}

function fillRect() {
	let canvas = makeCanvas();
	let context = canvas.getContext("2d");
	let pattern = context.createPattern(image.img, "no-repeat");
	context.fillStyle = pattern;
	tileParams.forEach(p => {
		context.translate(p.dest.x - p.src.x, p.dest.y - p.src.y);
		context.fillRect(p.src.x, p.src.y, 20, 20);
		context.resetTransform();
	});
	return canvas;
}

function fillRectPremadePattern() {
	let canvas = makeCanvas();
	let context = canvas.getContext("2d");
	context.fillStyle = image.pattern;
	tileParams.forEach(p => {
		context.translate(p.dest.x - p.src.x, p.dest.y - p.src.y);
		context.fillRect(p.src.x, p.src.y, 20, 20);
		context.resetTransform();
	});
	return canvas;
}

function putImageData() {
	let canvas = makeCanvas();
	let context = canvas.getContext("2d");
	tileParams.forEach(p => {
		// let p = tileParams[3]
		context.putImageData(
			image.data,
			// 200,200,
			// -100,-100,
			// 100,100,
			// 20, 20
			p.dest.x - p.src.x,
			p.dest.y - p.src.y,
			p.src.x,
			p.src.y,
			p.src.w,
			p.src.h
		);
	});
	return canvas;
}

// function r() {}
// PIXI.loader.add("sprites.json").load(r);
window.PIXI = PIXI;

let app = new PIXI.Application({ width: 220, height: 220 });
function pixi() {
	let textures = PIXI.loader.resources["sprites.json"].textures;
	// let texture = PIXI.utils.TextureCache["color.jpg"];
	let stage = app.stage;
	for (var i = stage.children.length - 1; i >= 0; i--) {
		stage.removeChild(stage.children[i]);
	}
	let j = 0;
	tileParams.forEach(p => {
		// let p = tileParams[1];
		j++;
		if (j == 8) {
			j = 0;
		}
		let mytexture = textures[j];
		let sprite = new PIXI.Sprite(mytexture);
		sprite.x = p.dest.x;
		sprite.y = p.dest.y;

		app.stage.addChild(sprite);
		// app.renderer.render(app.stage);
		// let sprite = new PIXI.Sprite(texture);
		// // let p = tileParams[0];
		// sprite.x = p.dest.x;
		// sprite.y = p.dest.y;
		// sprite.width = p.dest.w;
		// sprite.height = p.dest.h;
		// app.stage.addChild(sprite);
	});

	return app.view;
}

module.exports = {
	makeCanvas,
	drawImage,
	fillRect,
	fillRectPremadePattern,
	putImageData,
	pixi
};
