/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


// require('lodash')
// require('platform')
// let Benchmark  = require('benchmark')


let image = __webpack_require__(1);

let suite = __webpack_require__(2)

let fns = __webpack_require__(4)

window.onload = () => {


    let go = document.createElement('button');
    go.innerHTML = "go"
    document.body.appendChild(go)
    go.onclick = () => {
      suite.run();
    }
    
    let show = document.createElement('button');
    show.innerHTML = "show"
    document.body.appendChild(show)
    show.onclick = () => {
     document.body.appendChild(image.img) 
     document.body.appendChild(fns.drawImage()) 
     document.body.appendChild(fns.fillRect()) 
     document.body.appendChild(fns.fillRectPremadePattern()) 
     document.body.appendChild(fns.putImageData()) 
    }


}

// let url = "color.jpg"

// let img, imgpattern, imgdata
// window.onload = () => {
//   img = document.createElement('img');
//   img.src=url
//   img.onload = ()=> {
//     imgpattern = makeCanvas().getContext('2d').createPattern(img, 'no-repeat')
//     imgdata = drawImage().getContext('2d').getImageData(0,0,220,220)
//   }
// }

// function makeCanvas(){
//   let canvas = document.createElement('canvas');
//   canvas.width = 220;
//   canvas.height = 220;
//   return canvas
// }
// function drawImage(){
//   let canvas = makeCanvas();
//   let context = canvas.getContext('2d');
//   context.drawImage(img, 0, 0);
//   return canvas;
// }

// function fillRect(){
//   let canvas = makeCanvas();
//   let context = canvas.getContext('2d');
//   let pattern = context.createPattern(img, 'no-repeat');
//   context.fillStyle = pattern
//   context.fillRect(0, 0, 220, 220);
//   return canvas;
// }

// function fillRectPremadePattern(){
//   let canvas = makeCanvas();
//   let context = canvas.getContext('2d');
//   // let pattern = context.createPattern(img, 'no-repeat');
//   context.fillStyle = imgpattern
//   context.fillRect(0, 0, 220, 220);
//   return canvas;
// }

// function putImageData(){
//   let canvas = makeCanvas();
//   let context = canvas.getContext('2d');
//   context.putImageData(imgdata, 0, 0);
//   return canvas;
// }

// function runTests(){
//   var suite = new Benchmark.Suite('Draw one big image');
//   // add tests
//   suite.add('drawImage', function() {
//     drawImage()
//   })
//   .add('fillRect', function() {
//     fillRect()
//   })
//   .add('fillRectPremadePattern', function() {
//     fillRectPremadePattern()
//   })
//   .add('putImageData', function() {
//     putImageData()
//   })
//   // add listeners
//   .on('cycle', function(event) {
//     console.log(event.currentTarget.name, String(event.target));
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // run async
//   .run({ 'async': true });

// }

/***/ }),
/* 1 */
/***/ (function(module, exports) {


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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let addReporter = __webpack_require__(3)

let image = __webpack_require__(1)

let fns = __webpack_require__(4)


var suite = new Benchmark.Suite('One Draw');
// add tests
suite.add('drawImage', function () {
        fns.drawImage()
    })
    .add('fillRect', function () {
        fns.fillRect()
    })
    .add('fillRectPremadePattern', function () {
        fns.fillRectPremadePattern()
    })
    .add('putImageData', function () {
        fns.putImageData()
    })
// add listeners
//   .on('cycle', function(event) {
//     console.log(event.currentTarget.name, String(event.target));
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // run async
//   .run({ 'async': true });

module.exports = addReporter(suite);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = (suite) => {
    return suite.on('cycle', function(event) {
        console.log(event.currentTarget.name, String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


let image = __webpack_require__(1)

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

/***/ })
/******/ ]);