'use strict'

const noppaLuku = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

document.getElementById('kuva').addEventListener('click', () => {
    const noppaluku = noppaLuku(1,6)
    const kuva = document.getElementById('kuva')
    const kuvat = '<img src="./img/' + noppaluku + '.png">'
    kuva.innerHTML  = kuvat
})

