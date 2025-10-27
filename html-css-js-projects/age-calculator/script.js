let dateInput = document.querySelector('input')
let ageBtn = document.querySelector('button')
let paraInfo = document.querySelector('p')

const handleAge =()=>{
    let userAge = dateInput.value.split('-')

    let calculatedAge = 2025 - Number(userAge[0])

    paraInfo.innerHTML = `Your age is ${calculatedAge} years old`
}


ageBtn.addEventListener('click', handleAge)