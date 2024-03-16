'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        },
        {
            txt: 'omer omer omer omer',
            size: 20,
            color: 'red'
        }
    ]
}


function getMeme() {
    return gMeme

}


function setLineTxt(text, lineIdx){
    var {lines} = gMeme
    console.log('lines[0].txt:', lines[0].txt)

    lines[0].txt = text


}


// function _createMeme() {
//     return {
//         selectedImgId: 5,
//         selectedLineIdx: 0,
//         lines: [
//             {
//                 txt: 'I sometimes eat Falafel',
//                 size: 20,
//                 color: 'red'
//             }
//         ]
//     }

// }
