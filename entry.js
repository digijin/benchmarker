
let image = require('./src/image');
let suite = require('./src/oneDraw')
let fns = require('./src/tileDrawFunctions')

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
