var suite = new Benchmark.Suite;

let url = "https://www.color-meanings.com/wp-content/uploads/2014/02/Colors-of-the-Rainbow.jpg"

let img, imgpattern
window.onload = () => {
  img = document.createElement('img');
  img.src=url
  img.onload = ()=> {
    imgpattern = makeCanvas().getContext('2d').createPattern(img, 'no-repeat')


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
     document.body.appendChild(img) 
     document.body.appendChild(drawImage()) 
     document.body.appendChild(fillRect()) 
     document.body.appendChild(fillRectPremadePattern()) 
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

function runTests(){
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