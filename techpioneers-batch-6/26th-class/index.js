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
const printNum = (given) => {
    for(let i = 0; i <= given; i++ ){
        console.log(i)
    }
}
printNum(6)

// Write a function that takes a number and prints all numbers divisible by 5 up to that number.
const divisibleByFive = (number) => {
    for(let i = 0; i <= number; i++){
        if(i % 5 === 0){
            console.log(i)
        }
    }
}
divisibleByFive(20)

// Write a function that returns the square of a number.
const square = (i) => {
    console.log(i * i)
}
square(10)

// Write a function that takes two numbers and prints which one is larger.
const checkNum = (a,b) =>{
    if(a > b){
        console.log(a + '  is larger')
    }else if(b > a){
        console.log(b + '  is grater')
    }else{
        console.log('Both are Equal')
    }
}
checkNum(20,10)

// Write a function that takes an array and returns how many elements it has.
const funOfArr = (arr) => {
   console.log(arr.length + 1)
}
funOfArr([10.20,30,20,34])

// Write a function that prints all even numbers between 1 and 50.
const evenNum = () => {
    for(let i = 0; i <= 50; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
evenNum()

// Write a function that takes an array of names and prints each name in uppercase.
// const funOfUpperCase = (array) => {
//     for(let i = 0; i <= array.length; i++){
//         console.log(array[i].toUpperCase())
//     }
// }
// funOfUpperCase(['bilal','laiba'])

// Write a function that takes a number and prints the multiplication table of that number up to 10.
const table = (num) => {
    for(let i = 1; i <= 10; i++){
        console.log(num + ' x ' + i + ' = ' + i * num)
    }
}
table(11)

// Write a function that checks if a number is positive, negative, or zero.
const checkNumber = (num) => {
    if(num > 0){
        console.log(num +' is Positive')
    }else if(num < 0){
        console.log(num +' is Negative')
    }else{
        console.log('This is Zero')
    }
}
checkNumber(1)

// Write a function that takes an array of numbers and prints only the odd numbers.
const funOfOddNumbers = (arr) => {
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 === 1){
            console.log(arr[i])
        }
    }
}
funOfOddNumbers([1,2,3,4,5,6,7,8,9])

// let students = [
//   {
//     name: "aqsa",
//     age: 11,
//     marks: 50,
//   },
//   {
//     name: "shoaib",
//     age: 20,
//     marks: 80,
//   },
//   {
//     name: "sudais",
//     age: 18,
//     marks: 40,
//   },
// ];

// let newStudents = students.map((item) => {
//   return {
//     ...item,
//     marks: item.marks + 10,
//   };
// });

// console.log(newStudents);

// Use filter to find completed orders
let orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 150, status: "pending" },
  { id: 3, amount: 800, status: "completed" }
];
const completedOrders = orders.filter(order => order.status === 'completed')
console.log(completedOrders)

// Use filter to return employees with salary > 30000,
let employees = [
  { name: "salar", salary: 50000 },
  { name: "Shoaib", salary: 25000 },
  { name: "Hassan", salary: 60000 }
];
const salary = employees.filter((employee)=>{
    return(
        employee.salary > 30000
    )
})
console.log(salary)

// Use map to return only the product names.
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 }
];
let productsNames = products.map((product)=>{
    return(
        product.name
    )
})
console.log(productsNames)

// Use filter to get students with marks >= 50
// Then use map to increase their marks by 10
let students = [
  { name: "Aqsa", marks: 45 },
  { name: "Shoaib", marks: 80 },
  { name: "Ali", marks: 60 },
  { name: "Hassan", marks: 30 }
];
let passedStudents = students.filter((student) => {
    return(
        student.marks >= 50
    )
})
console.log(passedStudents)

let incrementMarks = passedStudents.map((student) => {
    return{
        ...student,
        marks: student.marks + 10
    }
    
})
console.log(incrementMarks)

// Use filter to take only active users
// Use map to return:
// "Welcome Anees!", "Welcome Bilal!"
let users = [
  { name: "Anees", active: true },
  { name: "Sara", active: false },
  { name: "Bilal", active: true },
  { name: "Hira", active: false }
];

let activeUsers = users.filter((user) => {
    return(
        user.active === true
    )
})
console.log(activeUsers)

let welcomeText = activeUsers.map((user) => {
    return{
        ...user,
        name: ' Welcome ' + user.name
    }
})
console.log(welcomeText)


// Use filter to keep products price < 500
// Use map to apply 20% discount
// Return the new prices only
let myProducts = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 250 }
];
let cheapProducts = myProducts.filter((product) => {
    return(
        product.price < 500
    )
})
console.log(cheapProducts)

let discountedPrice = cheapProducts.map((product) => {
    return{
        // ...product,
        price: product.price - product.price * 0.20
    }
})
console.log(discountedPrice)



