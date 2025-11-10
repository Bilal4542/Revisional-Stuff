let btnRed = document.querySelector('.red')
let btnGreen = document.querySelector('.green')
let btnYellow = document.querySelector('.yellow')
let btnpink = document.querySelector('.pink')
let btnBrown = document.querySelector('.brown')
let btnBlue = document.querySelector('.blue')
let btnPurple = document.querySelector('.purple')

const redHandler = () =>{
    document.body.style.backgroundColor = 'red'
}
const greenHandler = () =>{
    document.body.style.backgroundColor = 'green'
}
const yellowHandler = () =>{
    document.body.style.backgroundColor = 'yellow'
}
const pinkHandler = () =>{
    document.body.style.backgroundColor = 'pink'
}
const brownHandler = () =>{
    document.body.style.backgroundColor = 'brown'
}
const blueHandler = () =>{
    document.body.style.backgroundColor = 'blue'
}
const purpleHandler = () =>{
    document.body.style.backgroundColor = 'purple'
}


btnRed.addEventListener('click', redHandler)
btnGreen.addEventListener('click', greenHandler)
btnYellow.addEventListener('click', yellowHandler)
btnpink.addEventListener('click', pinkHandler)
btnBrown.addEventListener('click', brownHandler)
btnBlue.addEventListener('click', blueHandler)
btnPurple.addEventListener('click', purpleHandler)