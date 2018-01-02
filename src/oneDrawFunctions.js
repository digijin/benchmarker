
let image = require('./image')

function makeCanvas() {
    let canvas = document.createElement('canvas');
    canvas.width = 220;
    canvas.height = 220;
    return canvas
}
function drawImage() {
    let canvas = makeCanvas();
    let context = canvas.getContext('2d');
    context.drawImage(image.img, 0, 0);
    return canvas;
}

function fillRect() {
    let canvas = makeCanvas();
    let context = canvas.getContext('2d');
    let pattern = context.createPattern(image.img, 'no-repeat');
    context.fillStyle = pattern
    context.fillRect(0, 0, 220, 220);
    return canvas;
}

function fillRectPremadePattern() {
    let canvas = makeCanvas();
    let context = canvas.getContext('2d');
    // let pattern = context.createPattern(img, 'no-repeat');
    context.fillStyle = image.pattern
    context.fillRect(0, 0, 220, 220);
    return canvas;
}

function putImageData() {
    let canvas = makeCanvas();
    let context = canvas.getContext('2d');
    context.putImageData(image.data, 0, 0);
    return canvas;
}

module.exports = { makeCanvas, drawImage, fillRect, fillRectPremadePattern, putImageData }