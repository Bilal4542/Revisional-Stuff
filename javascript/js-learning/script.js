console.log("Hello, World!");
console.log("Hello, Bilal");
console.log("Hello, CloudBreexe Family");
console.log("Hello, Everyone");
console.log(5);

console.log('Information')

let name = 'Muhammad Bilal';
var age = 25;
let Major = 'Software Engineering';
let uni = 'Islamia College University Peshawar';

console.log(name)
console.log(age)
console.log(Major)
console.log(uni)

var age = 26;

console.log(name)
console.log(age)
console.log(Major)
console.log(uni)


// challenge
console.log('Hello World')

console.log('Hello, My name is Muhammad Bilal and I want to become a full stack website developer.')

let myName = 'Muhammad Bilal'
let myAge = 24

let myIntro = 'My Name is ' + myName + 'and My age is ' + myAge
console.log(myIntro)

// initialize two variables and output their sum, minus, multiply and division


// let firstNumber = prompt('Enter your first Number:')
// let secondNumber = prompt("Enter your second Number:")

// let sum = firstNumber + secondNumber;
// let subtract = firstNumber - secondNumber;
// let multiply = firstNumber * secondNumber;
// let divide = firstNumber / secondNumber;

// console.log('Sum of your Two Numbers:', sum);
// console.log('Stbtraction of your Two Numbers:', subtract);
// console.log('Multiplication of your Two Numbers:', multiply);
// console.log('Division of your Two Numbers:', divide);


// BMI calculator for Mark and Jhon
let markMass = 60
let markHeight = 6

let jhonMass = 70
let jhonHeight = 5

let markBMI = markMass / (markHeight * markHeight)
let jhonBMI = jhonMass / (jhonHeight * jhonHeight)

console.log('Mark BMI ', markBMI)
console.log('Jhon BMI ', jhonBMI)


// celcius to frnheight

let celcius = 37

let frn = (9/5) * celcius + 32
console.log(frn)


console.log('Welcome to the Full Stack Web Development BootCamp')

console.log('I am learning JavaScript')
console.log('Practice makes a developer perfect')
console.log('I will stay consistent every day')

console.log('My Favourite language is "JavaScript"')

let firstName = 'Muhammad Bilal'
let city = 'Peshawar'
console.log(`My name is ${firstName} and I live in ${city}`)

let fName = 'Muhammad Bilal'
let course = 'Website Development'
let goal = 'To be Full Stack Website Developer IN SHA ALLAH'
console.log(`My name is ${fName}, my cousre is ${course} and my goal is ${goal}`)


// conditions

let yourAge = 12;
if(yourAge > 18){
    console.log('User can vote');
}else{
    console.log('User Cannot vote');
    
}

let gender = 'female'
if(gender === 'male'){
    console.log('Hi Mr.');
}else{
    console.log('Hi Miss.');
    
}

// nested if else

let marks = 44

if(marks > 80){
    console.log('Excellent');
}else if(marks > 70){
    console.log('Good');
}else if(marks > 60){
    console.log('Not Bad');
}else if(marks > 50){
    console.log('More Effort Required');
}else{
    console.log('Fail');
}


// logical operators

let kids = 'playing'
let rain = 'yes'

if(kids === 'playing' && rain === 'yes'){
    console.log('will be play outside');
}
else{
    console.log('Not playing');
}


// let char = prompt('Enter Character: ')
// if(char === 'a' || char === 'i' || char === 'o' || char === 'u' || char === 'e'){
//     console.log('vowel');
// }
// else{
//     console.log('constant');
// }

// LOOPS
  for (let i = 1; i <= 10; i++) {
      console.log(i);
    }

// even numbers
for(let even = 0; even <= 20; even = even + 2){
    console.log(even)
}

// print table
for(let table = 1; table <=10; table++){
    console.log(`11 x ${table} = ${table * 11}`)
}

// calculate the sum of 1st hundred numbers

let sum = 0;
for(let i = 1; i <=100; i++){
    sum = sum + i
}
console.log('Sum of 1st Hundred Numbers is ', sum)


// Functions

function myDetails(){
    console.log('Name: Muhammad Bilal')
    console.log('Age: ' + 24)
    console.log('Role: Software Engineer')
    console.log('Islamia College Peshawar')
}
myDetails()


// add number of child

function add(num1, num2){
    console.log(num1 + num2)
}
console.log('Number of 1st child:')
add(30,10)
console.log('Number of 2nd child:')
add(90, 50)
console.log('Number of 3rd child:')
add(43, 29)


// age Calculator

function ageCalculator(dateOfBirth, name){
    let yoursAge = 2025 - dateOfBirth
    console.log(`Age of ${name} is ${yoursAge} years`)
}
ageCalculator(2001, 'Bilal')


// write a function to check the number if the number is even return true or if the number is odd return false

const isEven = (num) =>{
    if (num % 2 ===0) {
        return true
    }else{
        return false
    }
}
console.log(isEven(67))