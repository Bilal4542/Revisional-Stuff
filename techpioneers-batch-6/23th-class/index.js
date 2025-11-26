console.log('Hello World')


// Print numbers from 10 to 1 (reverse order).
for(let i = 10; i > 0; i--){
    console.log(i)
}


// Print all numbers from 1 to 20 but print only the odd numbers.
for(let oddNum = 1; oddNum <= 20; oddNum++){
    if(oddNum % 2 === 1){
        console.log(oddNum)
    }
}

// Print numbers from 1 to 10 using a for loop
for(let num = 1; num <= 10; num++){
    console.log(num)
}

// Print numbers from 1 to 50 and print “Even” if number is even else print “Odd”.
for(let number = 1; number <= 50; number++){
    if(number % 2 === 0){
        console.log(number + ' is Even Number')
    }else{
        console.log(number + ' is Odd Number')
    }
}

// Create an array of 5 numbers and print each number using a for loop.
// let numArrays = [10, 20, 30, 40, 50]
// for(let i = 0; i <= numArrays.length; i++){
//     console.log(numArrays[i])
// }

// Given an array of numbers, print only the numbers greater than 10.
// let array = [2,4,7,9,11,15,76,34,65,98,10,38,43,27,63]
// for(let i = 0; i <= array.length; i++){
//     if(array[i] >= 10){
//         console.log(array[i])
//     }
// }

// Create an array of names and print each name with its index number.
// let nameArray = ['Bilal', 'Waqas', 'Laiba', 'Fatime', 'Usman', 'Saad', 'Huzaifa']
// for(let i = 0; i <= nameArray.length; i++){
//     console.log(i  +' ' +  nameArray[i])
// }