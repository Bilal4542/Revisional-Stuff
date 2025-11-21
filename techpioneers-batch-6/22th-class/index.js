/*
    arrays => array should be in square brackets [], a set of data, index of array starts from 0 index, 
    methoods of array => push for adding new item in the last of array, pop deleted the value at the end of the array , unshift added the value at the start of the array, shift deleted the value at the start of the array, splice added and deleted the value from where u want, 
*/ 
let num = 8
if(num % 2 === 0){
    console.log('even')
}else{
    console.log('odd')
}

// Write a program that checks a number and prints whether it is positive, negative,
let number = 9
if(number >= 0){
    console.log('Positive')
}else{
    console.log('negative')
}

// Ask the user for their age and print: "Teenager" if age is less than 18 "Adult" if age >= 18
let age = 12
if(age >= 18){
    console.log('Adult')
}else{
    console.log('Teenager')
}

// Check if a number is divisible by 5 and 10. If yes → print "Divisible", else → print "Not Divisible".
let no = 35
if(no % 5 === 0 && no % 10 === 0){
    console.log('Divisible')
}else{
    console.log('Not Divisible')
}

// Ask the user for a username and password.If username = "admin" and password = "1234", print "Access Granted", else print "Access Denied".

let username = 'admin'
let password = 12345
if(username === 'admin' && password === 12345){
    console.log('Access Granted')
}else{
    console.log('Access Denied')
}

// Create an array of 5 fruits. Then remove the last item using .pop() and print the result.

let fruits = ['Apple', 'Banana', 'StrawBerry', 'Peach', 'Palm']
fruits.pop()
console.log(fruits)

// Create an array of numbers and add two new numbers at the end using .push().
let numbers = [12, 23, 34, 45]
numbers.push(56, 67)
console.log(numbers)

// Create an array of names. Remove the first two names using .splice().

let names = ['Talha', 'Waqas', 'Ahmad', 'Usman', 'Saad']
names.splice(0,2)
console.log(names)

// Create an empty array. Add three colors at the beginning using .unshift().
let colors = []
colors.unshift('Red', 'Green', 'Blue')
console.log(colors)

// Create an array. delete value at the beginning using .shift().
let values = [999, 888, 777, 666, 555, 444, 333, 222, 111]
values.shift()
console.log(values);

// Create an array of numbers. Use .reverse() to reverse the array and then print it.
let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
numArray.reverse()
console.log(numArray)


// Check if a number is divisible by both 3 and 5. If both → “FizzBuzz”, if only 3 → “Fizz”, if only 5 → “Buzz”, else → “Nothing”.

let yourNum = 22
if(yourNum % 3 === 0 && yourNum % 5 === 0){
    console.log('FizzBuzz')
}else if(yourNum % 3 === 0){
    console.log('Fizz')
}else if(yourNum % 5 === 0){
    console.log('Buzz')
}else{
    console.log('Nothing')
}

// Take 3 numbers and check the largest using if-else only

let a = 9
let b = 4
let c = 6
if(a > b && a > c){
    console.log(a + ' is Greater')
}else if(b > a && b > c){
    console.log(b + ' is greater')
}else{
    console.log(c + ' is Greater')
}

// Check if a character is a vowel or consonant using if-else.
let character = 'i'
if(character === 'a' || character === 'i' || character === 'o' || character === 'e' || character === 'u'){
    console.log('Vowel')
}else{
    console.log('constant')
}


// Create an array of 6 items. Remove 2 items from the middle using .splice().

let item = ['Bilal', 'Anees', 'Awais', 'Laiba', 'Zainab', 'Masooma']
item.splice(3,2)
console.log(item)