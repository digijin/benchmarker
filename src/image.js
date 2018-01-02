
let url = "color.jpg"
let img = document.createElement('img');
let output = {img}
img.src=url
img.onload = ()=> {
    output.pattern = makeCanvas().getContext('2d').createPattern(img, 'no-repeat');
    output.data = drawImage().getContext('2d').getImageData(0,0,220,220);
}
function makeCanvas(){
    let canvas = document.createElement('canvas');
    canvas.width = 220;
    canvas.height = 220;
    return canvas
}
function drawImage(){
    let canvas = makeCanvas();
    let context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return canvas;
}

module.exports = output