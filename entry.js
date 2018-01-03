let image = require("./src/image");
let suiteTile = require("./src/tileDraw");
let suiteOne = require("./src/oneDraw");
let fns = require("./src/oneDrawFunctions");

window.onload = () => {
	let one = document.createElement("button");
	one.innerHTML = "one";
	document.body.appendChild(one);
	one.onclick = () => {
		suiteOne.run();
	};

	let tile = document.createElement("button");
	tile.innerHTML = "tile";
	document.body.appendChild(tile);
	tile.onclick = () => {
		suiteTile.run();
	};

	let show = document.createElement("button");
	show.innerHTML = "show";
	document.body.appendChild(show);
	show.onclick = () => {
		document.body.appendChild(image.img);
		document.body.appendChild(fns.drawImage());
		document.body.appendChild(fns.fillRect());
		document.body.appendChild(fns.fillRectPremadePattern());
		document.body.appendChild(fns.putImageData());
		document.body.appendChild(fns.pixi());
	};
};
