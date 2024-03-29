'use strict'

var gElCanvas
var gCtx

function onInitMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

  
    // console.log('gElCanvas:', gElCanvas)
    // console.log('gCtx:', gCtx)

    renderMeme()

    document.querySelector('.editor-section').classList.remove('hide')
    document.querySelector('.gallery-section').classList.add('hide')

}

function renderMeme() {
    if (!gMeme) return
    var meme = gMeme
    console.log('meme:', meme)

    var {selectedImgId, selectedLineIdx, lines} = meme
    // console.log('selectedImgId:', selectedImgId)

    const img = new Image()
    img.src = `img/meme-imgs (square)/${selectedImgId}.jpg`

    img.onload = () =>{
        gCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
        
        // console.log('lines:', lines)
        // console.log('lines[selectedLineIdx]:', lines[selectedLineIdx])
        const text = lines[selectedLineIdx].txt

        gCtx.fillStyle = lines[selectedLineIdx].color
        gCtx.font = `${lines[selectedLineIdx].size}px Ariel`
    
        gCtx.fillText(text, 50, 50)
    }

}


function onSetLineTxt(el){
    // console.log('el:', el)
    // console.log('el.value:', el.value)

    setLineTxt(el.value)
    renderMeme() 



}