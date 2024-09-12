'use strict'

const noppaLuku = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

document.getElementById('kuva').addEventListener('click', () => {
    const noppaluku = noppaLuku(1,6)
    document.querySelector('img').src ='./img/' + noppaluku + '.png'
})

