'use strict'

// var imgCount = 18
var gImgs = _createImgs()

var gMeme 
var gMemes = []
_createMemes()

console.log('gImgs:', gImgs)
console.log('gMemes:', gMemes)
console.log('gMeme:', gMeme)



function getMeme(imgId) {
    // gMeme = createMeme(imgId)


    return gMeme

}




function setLineTxt(text, lineIdx) {
    var { lines } = gMeme
    console.log('lines[0].txt:', lines[0].txt)

    lines[0].txt = text
}


function saveImg(ev) {
    console.log('ev:', ev)
    // saveToStorage(key, val)

}








// Privet Function

function _createImgs() {
    return [
        { id: 1, url: 'img/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
        { id: 2, url: 'img/meme-imgs (square)/2.jpg', keywords: ['happy', 'dog'] },
        { id: 3, url: 'img/meme-imgs (square)/3.jpg', keywords: ['baby', 'dot'] },
        { id: 4, url: 'img/meme-imgs (square)/4.jpg', keywords: ['cuteness', 'cat'] },
        { id: 5, url: 'img/meme-imgs (square)/5.jpg', keywords: ['funny', 'baby'] },
        { id: 6, url: 'img/meme-imgs (square)/6.jpg', keywords: ['crazy', 'cat'] },
        { id: 7, url: 'img/meme-imgs (square)/7.jpg', keywords: ['funny', 'baby'] },
        { id: 8, url: 'img/meme-imgs (square)/8.jpg', keywords: ['funny', 'happy'] },
        { id: 9, url: 'img/meme-imgs (square)/9.jpg', keywords: ['funny', 'baby'] },
        { id: 10, url: 'img/meme-imgs (square)/10.jpg', keywords: ['funny', 'happy'] },
        { id: 11, url: 'img/meme-imgs (square)/11.jpg', keywords: ['happy', 'sarcastic'] },
        { id: 12, url: 'img/meme-imgs (square)/12.jpg', keywords: ['funny', 'crazy'] },
        { id: 13, url: 'img/meme-imgs (square)/13.jpg', keywords: ['sarcastic', 'crazy'] },
        { id: 14, url: 'img/meme-imgs (square)/14.jpg', keywords: ['sad', 'crazy'] },
        { id: 15, url: 'img/meme-imgs (square)/15.jpg', keywords: ['happy', 'sarcastic'] },
        { id: 16, url: 'img/meme-imgs (square)/16.jpg', keywords: ['funny', 'happy'] },
        { id: 17, url: 'img/meme-imgs (square)/17.jpg', keywords: ['funny', 'crazy'] },
        { id: 18, url: 'img/meme-imgs (square)/18.jpg', keywords: ['sarcastic', 'sad'] }
    ]
}

function _createMemes() {
    gImgs.forEach(img => gMemes.push(_createMeme(img.id)))
}

function _createMeme(imgId, lineIdx = 0) {
    return {
        selectedImgId: imgId,
        selectedLineIdx: lineIdx,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    }

}

function _saveImgs() {
    saveToStorage('gImgsDB', gImgs)
}

function _saveMemes() {
    saveToStorage('gMemesDB', gMemes)
}

function _saveMeme() {
    saveToStorage('gMemeDB', gMeme)
}
