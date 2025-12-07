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