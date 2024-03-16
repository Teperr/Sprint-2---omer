'use strict'

function onInitGallery() {
    renderGallery()

    document.querySelector('.editor-section').classList.add('hide')
}


function renderGallery() {

    var strHtml = gImgs.map(img => `
    
        <img class="flex-item item${img.id}" data-id="${img.id}" src="img/meme-imgs (square)/${img.id}.jpg" onclick="onImageClicked(this,${img.id})">
    
    `)

    document.querySelector('.flex-container').innerHTML = strHtml.join('')
}



function onImageClicked(el, imgId) {
    // console.log('data-id:', data-id)
    console.log('imgId', imgId)

    gMeme = createMeme(imgId)
    console.log('gMeme:', gMeme)

    renderMeme()




}
