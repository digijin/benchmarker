

let url = "color.jpg"

let img, imgpattern, imgdata
window.onload = () => {
  img = document.createElement('img');
  img.src=url
  img.onload = ()=> {
    imgpattern = makeCanvas().getContext('2d').createPattern(img, 'no-repeat')
    imgdata = drawImage().getContext('2d').getImageData(0,0,220,220)


    let go = document.createElement('button');
    go.innerHTML = "go"
    document.body.appendChild(go)
    go.onclick = () => {
     runTests()
    }
    
    let show = document.createElement('button');
    show.innerHTML = "show"
    document.body.appendChild(show)
    show.onclick = () => {
    //  document.body.innerHTML += "<br />original<br />"
     document.body.appendChild(img) 
    //  document.body.innerHTML += "<br />drawimage<br />"
     document.body.appendChild(drawImage()) 
    //  document.body.innerHTML += "<br />fillRect<br />"
     document.body.appendChild(fillRect()) 
    //  document.body.innerHTML += "<br />fillRectPremadePattern<br />"
     document.body.appendChild(fillRectPremadePattern()) 
     document.body.appendChild(putImageData()) 
    }
  }
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

function fillRect(){
  let canvas = makeCanvas();
  let context = canvas.getContext('2d');
  let pattern = context.createPattern(img, 'no-repeat');
  context.fillStyle = pattern
  context.fillRect(0, 0, 220, 220);
  return canvas;
}

function fillRectPremadePattern(){
  let canvas = makeCanvas();
  let context = canvas.getContext('2d');
  // let pattern = context.createPattern(img, 'no-repeat');
  context.fillStyle = imgpattern
  context.fillRect(0, 0, 220, 220);
  return canvas;
}

function putImageData(){
  let canvas = makeCanvas();
  let context = canvas.getContext('2d');
  context.putImageData(imgdata, 0, 0);
  return canvas;
}
function runTests(){
  var suite = new Benchmark.Suite;
  // add tests
  suite.add('drawImage', function() {
    drawImage()
  })
  .add('fillRect', function() {
    fillRect()
  })
  .add('fillRectPremadePattern', function() {
    fillRectPremadePattern()
  })
  .add('putImageData', function() {
    putImageData()
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });

}