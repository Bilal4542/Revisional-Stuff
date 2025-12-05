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
  { name: "Hina", age: 48 }
];
let oldest = people[0]
for(let i =0; i < people.length; i++){
  if(people[i].age > oldest.age){
    oldest = people[i]
  }
}
console.log(oldest)

// Print only the tasks that are marked as completed.
let tasks = [
  { task: "Wash dishes", completed: true },
  { task: "Study", completed: false },
  { task: "Exercise", completed: true }
];
for(let i = 0; i < tasks.length; i++){
  if(tasks[i].completed === true){
    console.log(tasks[i].task)
  }
}

// Find all books with more than 300 pages and store them in a new array.
let books = [
  { title: "Book A", pages: 250 },
  { title: "Book B", pages: 350 },
  { title: "Book C", pages: 500 }
];
let largeBooks = []
for(let i = 0; i < books.length; i++){
  if(books[i].pages > 300){
    largeBooks.push(books[i])
  }
}
console.log(largeBooks)

// Given an array of orders, calculate the total price (sum of all prices).
let orders = [
  { item: "Burger", price: 350 },
  { item: "Pizza", price: 900 },
  { item: "Fries", price: 150 }
];
let total = 0
for(let i = 0; i < orders.length; i++){
  total = total + orders[i].price
}
console.log(total)

// Use a for loop to print all numbers from 1 to 50, but print "Even" for even numbers and "Odd" for odd numbers.
for(let i = 0; i <= 50; i++){
  if(i % 2 === 0){
    console.log(i + ' is Even number')
  }else{
    console.log(i + ' is Odd number')
  }
}

// Use a while loop to print numbers from 10 down to 1.
let count = 10
while(count >= 1){
  console.log(count)
  count--
}

// Create an array of numbers and use a for loop to find the largest number.
let num = [12,14,17,24,55,62,99,155]
let largestNum = num[0]
for(let i = 0; i < num.length; i++){
  if(num[i] > largestNum){
    largestNum = num[i]
  }
}
console.log('The Largest Num is ' + largestNum + ' in the given array.')  
