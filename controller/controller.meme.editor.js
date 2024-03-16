'use strict'

var gElCanvas
var gCtx

function initMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    console.log('SSDD:')
    console.log('gElCanvas:', gElCanvas)
    console.log('gCtx:', gCtx)

    renderMeme()

}

function renderMeme() {
    const img = new Image()
    img.src = 'img/meme-imgs (square)/1.jpg'


    img.onload = () =>{
        gCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
        
        const text = 'shira'

        gCtx.fillStyle = 'orange'
        gCtx.font = '50px Ariel'
    
        gCtx.fillText(text, 50, 50)
        gCtx.storkeText(text, 50, 50)
    }

}
