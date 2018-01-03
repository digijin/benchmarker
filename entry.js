let image = require("./src/image");
let suiteTile = require("./src/tileDraw");
let suiteOne = require("./src/oneDraw");
let fnsOne = require("./src/oneDrawFunctions");
let fnsTile = require("./src/tileDrawFunctions");

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

	let showOne = document.createElement("button");
	showOne.innerHTML = "show";
	document.body.appendChild(showOne);
	showOne.onclick = () => {
		document.body.appendChild(image.img);
		document.body.appendChild(fnsOne.drawImage());
		document.body.appendChild(fnsOne.fillRect());
		document.body.appendChild(fnsOne.fillRectPremadePattern());
		document.body.appendChild(fnsOne.putImageData());
		document.body.appendChild(fnsOne.pixi());
	};

	let showTile = document.createElement("button");
	showTile.innerHTML = "show";
	document.body.appendChild(showTile);
	showTile.onclick = () => {
		document.body.appendChild(image.img);
		document.body.appendChild(fnsTile.drawImage());
		document.body.appendChild(fnsTile.fillRect());
		document.body.appendChild(fnsTile.fillRectPremadePattern());
		document.body.appendChild(fnsTile.putImageData());
		document.body.appendChild(fnsTile.pixi());
	};
};
