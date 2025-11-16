import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const [name, setName] = useState('Muhammad')

    const [age, setAge] = useState(0)

    const [user, setUser] = useState({
        name: 'Muhammad Bilal',
        age: 12,
        address: 'Peshawar',
        role: 'Software Engineering'
    })


    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        if(count === 0) return;
        setCount(count - 1)
        
    }

    const nameHandler = () => {
        setName('Muhammad Bilal')
    }

    const ageHandler = () => {
        setAge(Math.floor(Math.random()*50))
    }

  return (
    <>
    <div>
      <button onClick={increment}>Plus</button>
      <p>{count}</p>
      <button onClick={decrement}>Minus</button>
    </div>
    <div className="">
        <p>{name}</p>
        <button onClick={nameHandler}>Get Full Name</button>
    </div>
    <div className="">
        <p>{age}</p>
        <button onClick={ageHandler}>Get Age</button>
    </div>
    <div className="">
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h3>{user.address}</h3>
        <h4>{user.role}</h4>
        <h2>{user.age > 18 ? <p>Eligible for Vote</p> : <p>Not Eligible for Vote</p>}</h2>
    </div>
    </>
    
  )
}

export default Counter
