'use strict'

// onInitGallery()
function onInitGallery() {
    renderGallery()

    
    document.querySelector('.editor-section').classList.add('hide')
    document.querySelector('.gallery-section').classList.remove('hide')
}


function renderGallery() {
    var uploadImage = `<form class="flex align-center justify-center upload-image relative" onsubmit="onSaveImg(event)"><label class="" for="upload"><input type="file" name="upload" id="upload" onchange="handleFileUpload(event)">upload</label><button class="save-button">Save</button></form>`

    var strHtml = gImgs.map(img => `
    
    <article class="">
        <img class="grid-item item${img.id}" 
        src="img/meme-imgs (square)/${img.id}.jpg" 
        onclick="onImageClicked(this,${img.id})">
    </article>
    
    `)
    // console.log('uploadImage + strHtml.join', uploadImage + strHtml.join(''))

    document.querySelector('.gallery-grid-container').innerHTML = uploadImage + strHtml.join('')
}

function handleFileUpload(event) {
    var file = event.target.files[0];
    // כאן תוכל לעשות מה שתרצה עם הקובץ שנבחר, כמו להציג אותו או לשמורו ב-local storage
    console.log('הקובץ שנבחר:', file);
}


function onImageClicked(el, imgId) {
    gMeme = getMemeById(imgId)

    
    renderMeme()
    onInitMeme()
}


function onSaveImg(ev) {
    saveImg(ev)
}



function _hideGallery(){
    
}