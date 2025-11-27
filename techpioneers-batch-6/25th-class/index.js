// console.log('Hello World')
// objects --> single thing multiple character or multiple data in a key value pair
// syntax --> let student = {}
// array of objects --> let students = [{}, {}, {}]

// const students = [
//     {
//         rollNumber: 1,
//         name: 'Bilal',
//         age: 24
//     },
//     {
//         rollNumber: 2,
//         name: 'Hammad',
//         age: 21
//     },
//     {
//         rollNumber: 3,
//         name: 'Ahmad',
//         age: 22
//     }
// ]
// for(let i = 0; i < students.length; i++){
//     console.log(students[i].name)
// }

// let nums = [5, 12, 3, 20, 8];
//  Use a for loop to count how many numbers are > 10
// let nums = [5, 12, 3, 20,8]
// let aboveNum = '';
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 10){
//         aboveNum++
//     }
// }
// console.log(aboveNum + ' values are Greater than 10')

//  Print only the names using a for loop
// let studentsList = [
//   { name: "Ali", age: 18 },
//   { name: "Sara", age: 20 },
//   { name: "Anees", age: 22 }
// ];
// for(let i = 0; i < studentsList.length; i++){
//     console.log(studentsList[i].name)
// }

// Find all products with price less than 100
//  Create a new array cheapProducts using a for loop
let products = [
  { name: "Milk", price: 70 },
  { name: "Bread", price: 120 },
  { name: "Eggs", price: 90 }
];
let cheapProducts = []
for(let i = 0; i < products.length; i++){
    if(products[i].price < 100){
        cheapProducts.push(products[i])
    }
}
console.log(cheapProducts)

// Given an array of student objects, print the names of only those students whose marks are greater than 80.
let students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 72 },
  { name: "Hassan", marks: 91 }
];
for(let i = 0; i < students.length; i++){
    if(students[i].marks > 80){
        console.log(students[i].name)
    }
}
// Create a new array containing only the products that are in stock.
let items = [
  { name: "Laptop", stock: 0 },
  { name: "Mouse", stock: 5 },
  { name: "Keyboard", stock: 2 }
];
let inStocks = []
for(let i = 0; i < items.length; i++){
    if(items[i].stock > 0){
        inStocks.push(items[i])
    }
}
console.log(inStocks)

// Using a loop, count how many employees have a salary greater than 50,000.
let employees = [
  { name: "Adeel", salary: 45000 },
  { name: "Hina", salary: 60000 },
  { name: "Usman", salary: 52000 }
];
let aboveSalary = ''
for(let i = 0; i < employees.length; i++){
    if(employees[i].salary > 50000){
        aboveSalary++
    }
}
console.log(aboveSalary + ' employes have more than 50000 salary')

// Print only those cars whose model year is greater than 2015.
let cars = [
  { name: "Corolla", year: 2012 },
  { name: "Civic", year: 2018 },
  { name: "City", year: 2020 }
];
for(let i = 0; i < cars.length; i++){
    if(cars[i].year > 2015){
        console.log(cars[i])
    }
}

// Using if-else, check each user’s age and print whether they are an adult (18+) or minor (<18).
let users = [
  { name: "Ahmad", age: 16 },
  { name: "Zara", age: 22 },
  { name: "Bilal", age: 18 }
];
for(let i = 0; i < users.length; i++){
    if(users[i].age >= 18){
        console.log(users[i].name + ' are adult')
    }else{
        console.log(users[i].name + ' are teenager')
    }
}

// Create a new array of products whose price is between 100 and 500 (inclusive).
let productsList = [
  { name: "Bag", price: 300 },
  { name: "Watch", price: 800 },
  { name: "Shoes", price: 150 }
];
let updatedProducts = []
for(let i = 0; i < productsList.length; i++){
    if(productsList[i].price >= 1 && productsList[i].price <= 500){
        updatedProducts.push(productsList[i])
    }
}
console.log(updatedProducts)

// Find the oldest person from an array using a for loop & if-else.
let people = [
  { name: "Omer", age: 30 },
  { name: "Ali", age: 40 },
  { name: "Hina", age: 25 }
];
