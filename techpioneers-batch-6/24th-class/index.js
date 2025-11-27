// let names = ['Bilal', 'Aqsa', 'Haris']
// for(let i = 0; i <= 2; i++){
//     console.log(i+1 + ': ' + names[i])
// }


// let digits = [200,400,500,100,700,120,450]
// let prices = []
// for(let i = 0; i <= digits.length; i++){
//     if(digits[i] > 300){
//         prices.push(digits[i])
//     }
// }
// console.log(prices)

// const names = ["shoaib", "Bilal", "Hammad", "Danish"];
// Using a for loop, create a new array where each name is converted to:
// arduino
// Copy code
// "shaoib is a student"

const personNames = ['Shoaib', 'Bilal', 'Hammad', 'Danish']
const updatedNames = []
for(let i = 0; i < personNames.length; i++){
    updatedNames.push(personNames[i] + ' is a Student')
}
console.log(updatedNames)

// const arr = [5, 1, 7, 2, 9, 3, 8];
// Using a for loop, create two arrays:
// One array containing all even numbers
// One array containing all odd numbers

const simpleArray = [5, 1, 7, 2, 9, 3, 8]
const evenNumber = []
const oddNumber = []
for(let i = 0; i < simpleArray.length; i++){
    if(simpleArray[i] % 2 === 0){
        evenNumber.push(simpleArray[i])
    }else{
        oddNumber.push(simpleArray[i])
    }
}
console.log(evenNumber)
console.log(oddNumber)

// Given an array of numbers, print each number multiplied by 2 using a for loop.
// let arr = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 2)
// }

// Given an array of names, print them in reverse order using a loop.
// let fruitNames = ['Banana', 'Apple', 'StrawBerry', 'Orange', 'Mango']
// for(let i = 0; i < fruitNames.length; i++){
//     fruitNames.reverse()
// }
// console.log(fruitNames)

// Print all numbers from 1 to 50 that are divisible by 5.
// for(let i = 1; i <= 50; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }

// Given an array of marks, print “Pass” if the mark is 40 or more, otherwise print “Fail” for each item.
// let marks = [66,78,92,83,34,97,62,79,53]
// for(let i = 0; i < marks.length; i++){
//     if(marks[i] >= 40){
//         console.log(marks[i] + ' : Passed')
//     }else{
//         console.log(marks[i] + ' : Failed')
//     }
// }

// Given an array of numbers, use a for loop to find how many numbers are even
// let givenArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// let evenNum = 0
// for(let i = 0; i < givenArray.length; i++){
//     if(givenArray[i] % 2 === 0){
//         evenNum++
//     }
// }
// console.log('Total Even Numbers: ' + evenNum)

// Create an array of strings and print each string in reverse order using a loop.
// let strings = ['Peshawar', 'Hayatabad', 'Mardan', 'Charsadda', 'KaKa Sab']
// let reversed = "";
// for(let i = 0; i < strings.length; i++){
//     for(let j = strings[i].length - 1; j >= 0; j--){
//         reversed += strings[i][j];
//     }
// }
// console.log(reversed)

// Given an array, use a loop to count how many values are greater than 50.
// let values = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]
// let aboveValues = 0
// for(let i = 0; i < values.length; i++){
//     if(values[i] > 50){
//         aboveValues++
//     }
// }
// console.log(aboveValues + ' valuse are above 50')

// Using a for loop, print only the elements at even index positions of an array.
// let evenIndexes = [200,190,180,170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10]
// for(let i = 0; i < evenIndexes.length; i++){
//     if(i % 2 === 0){
//        console.log(evenIndexes[i])
//     }
// }

// Write an if-else program to check whether a person is eligible to vote (age ≥ 18).
// let age = 19;
// if(age >= 18){
//     console.log('Eligible')
// }else{
//     console.log('not Eligible')
// }

// Given an array, use a loop to create a new array containing only odd numbers
// let allNums = [12,4,3,8,96,43,21,92,84,29,68,53,49,85]
// let oddArray = []
// for(let i = 0; i < allNums.length; i++){
//     if(allNums[i] % 2 === 1){
//         oddArray.push(allNums[i])
//     }
// }
// console.log(oddArray)

// Given an array of integers, print all pairs of numbers whose sum is exactly 20.
// let integers = [12,8,33,64,82,91,77,83,96,19,1]

// for(let i = 0; i < integers.length; i++){
//     for(let j = i + 1; j < integers.length; j++){
//         if(integers[i] + integers[j] === 20){
//            console.log(integers[i] +' and ' + integers[j] + ' is equal to 20')
//         }

//     }
// }