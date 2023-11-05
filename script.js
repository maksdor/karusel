let left = document.getElementById('arrowLeft')
let right = document.getElementById('arrowRight')
let karusel = document.getElementById('karusel')


left.addEventListener('click', clickLeft)
right.addEventListener('click', clickRight)


const karuselElem = 2
const width = 100/ karuselElem
const item = karusel.children.length - karuselElem

let current = 0

for (let i=0; i < karusel.childElementCount; i++) {
    karusel.children[i].style.width = width + '%'
    karusel.children[i].style.maxWidth = width + '%'
}

function clickLeft() {
    current -= 1
    if (current >= 0) {
        karusel.style.transform = `translateX(-${width * current}%)`
    } else {
        current = 0
    }
}

function clickRight() {
    current += 1
    if (current <= item) {
        karusel.style.transform = `translateX(-${width * current}%)`
    } else {
        current = item
    }
}