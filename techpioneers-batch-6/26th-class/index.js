// Write a function that takes an array and prints all items
const handleFruits = (fruits) => {
    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i])
    }
}
handleFruits(['Apple', 'Banana', 'Orange'])

// Write a function that prints if a number is even or odd.
const isEven = (num) => {
    if(num % 2 === 0){
        console.log(num + ' is Even Number')
    }else{
        console.log(num + ' is Odd Number')
    }
}
isEven(86)

// Write a function that prints all numbers from 1 to the number given.

// Write a function that takes a number and prints all numbers divisible by 5 up to that number.