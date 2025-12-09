// Use filter to get products with price > 1000, then map to return only their names.
let products = [
    {
        name: 'Speaker',
        price: 2000,
    },
    {
        name: 'Laptop',
        price: 10000,
    },
    {
        name: 'Mobile',
        price: 800,
    },
    {
        name: 'Shoes',
        price: 2500,
    },
    {
        name: 'Slippers',
        price: 400,
    },
]
let selectedProducts = products.filter((product)=>{
    return(
        product.price > 1000
    )
})
console.log(selectedProducts)

let onlyProductNames = selectedProducts.map((product)=>{
    return(
        product.name
    )
})
console.log(onlyProductNames)

// Use filter to keep users older than 18, then map to return "User: Ali (Adult)" format.
let users = [
    {
        name: 'Bilal',
        age: 24
    },
    {
        name: 'Usman',
        age: 23
    },
    {
        name: 'Uzair',
        age: 14
    },
    {
        name: 'Asim',
        age: 16
    },
    {
        name: 'Hassan',
        age: 19
    },
    {
        name: 'Talha',
        age: 18
    },
    {
        name: 'Muzzammil',
        age: 25
    },
    {
        name: 'Saad',
        age: 23
    },
    {
        name: 'Aqsa',
        age: 11
    },
    {
        name: 'Laiba',
        age: 25
    },
]
let adultUsers = users.filter((user) => {
    return(
        user.age >= 18
    )
})
console.log(adultUsers)

let addExtraText = adultUsers.map((user) => {
    return{
        ...user,
        name: user.name + ' is Adult'
    }
})
console.log(addExtraText)


// Use filter to keep items with quantity > 0, then map to return an array of quantities only.
let items = [
    {
        title: 'Carrot',
        quantity: 0
    },
    {
        title: 'Orange',
        quantity: 3
    },
    {
        title: 'Apple',
        quantity: 5
    },
    {
        title: 'Banana',
        quantity: 6
    },
]
let filteredItems = items.filter((item)=>{
    return(
        item.quantity > 0
    )
})
console.log(filteredItems)

let quantitiesOfItems = filteredItems.map((item)=>{
    return(
        'Quantity Of  ' + item.title + ' = ' + item.quantity
    )
})
console.log(quantitiesOfItems)

// Use filter to keep courses with duration <= 3 months, then map to return "Course: XYZ".
let courses = [
    {
        courseName: 'Web & App Development',
        duration: 3
    },
    {
        courseName: 'Application Development',
        duration: 3
    },
    {
        courseName: 'DIT',
        duration: 6
    },
    {
        courseName: 'Digital Marketing',
        duration: 3
    },
    {
        courseName: 'Graphic Designing',
        duration: 2
    },
    {
        courseName: 'Social Media Marketing',
        duration: 1
    },
]

let filteredCourses = courses.filter((course)=>{
    return(
        course.duration <= 3
    )
})
console.log(filteredCourses)

let courseXYZ = filteredCourses.map((course)=>{
    return(
        "Course: "+course.courseName
    )
})
console.log(courseXYZ)

// Use filter to keep cities with population above 100000, then map to return population * 2.
let cities = [
    {
        city: 'Peshawar',
        population: 200000
    },
    {
        city: 'Lahore',
        population: 250000
    },
    {
        city: 'Islamabad',
        population: 10000
    },
    {
        city: 'Karachi',
        population: 350000
    },
    {
        city: 'Multan',
        population: 230000
    },
    {
        city: 'Quetta',
        population: 467000
    },
]

let filteredCities = cities.filter((city)=>{
    return(
        city.population > 100000
    )
})
console.log(filteredCities)

let population = filteredCities.map((city)=>{
    return(
        "Poopulation of "+ city.city +" with Multiply by 2 is " + city.population * 2
    )
})
console.log(population)

// Use filter to keep grades "A" and "B", then map to return only names.
let students = [
    {
        studentName: 'Bilal',
        grade: 'A'
    },
    {
        studentName: 'Talha',
        grade: 'B'
    },
    {
        studentName: 'Waqas',
        grade: 'A'
    },
    {
        studentName: 'Saad',
        grade: 'C'
    },
    {
        studentName: 'Haris',
        grade: 'B'
    },
    {
        studentName: 'Laiba',
        grade: 'A'
    },
    {
        studentName: 'Zainab',
        grade: 'C'
    },
    {
        studentName: 'Fareeha',
        grade: 'B'
    },
    {
        studentName: 'Ahmad',
        grade: 'A'
    },
]
let filteredStudents = students.filter((student)=>{
    return(
        student.grade === 'A' || student.grade === 'B'
    )
})
console.log(filteredStudents)
let onlyNames = filteredStudents.map((student)=>{
    return(
        student.studentName
    )
})
console.log(onlyNames)

// Use filter to keep only completed tasks, then map to return "Completed: taskName".
let tasks = [
    {
        taskName: 'Home Wrok',
        completed: true
    },
    {
        taskName: 'Class Work',
        completed: false
    },
    {
        taskName: 'Assignment',
        completed: true
    },
    {
        taskName: 'Team Work',
        completed: true
    },
    {
        taskName: 'Group competition',
        completed: false
    },
]
let completedTasks = tasks.filter((task)=> task.completed === true).map((task)=> "Completed: " + task.taskName)
console.log(completedTasks)

// Use filter to keep movies with rating >= 4.5, then map to return an array of ratings only.
let movies = [
    {
        title: 'Animal',
        rating: 8.5
    },
    {
        title: 'Dilwale',
        rating: 9.5
    },
    {
        title: 'Laal Sing Chadda',
        rating: 3.5
    },
    {
        title: '3 Idiots',
        rating: 8.5
    },
    {
        title: 'Sholy',
        rating: 7.5
    },
]
let topRatedMovies = movies.filter((movie)=> movie.rating >= 4.5).map((movie)=> movie.rating)
console.log(topRatedMovies)