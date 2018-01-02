var suite = new Benchmark.Suite;

let url = "https://www.color-meanings.com/wp-content/uploads/2014/02/Colors-of-the-Rainbow.jpg"

let img
window.onload = () => {
  img = document.createElement('img');
  img.src=url
  img.onload = ()=> {

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
    }
  }
}

function drawRect(){

}

function runTests(){
  // add tests
  suite.add('RegExp#test', function() {
    /o/.test('Hello World!');
  })
  .add('String#indexOf', function() {
    'Hello World!'.indexOf('o') > -1;
  })
  .add('String#match', function() {
    !!'Hello World!'.match(/o/);
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