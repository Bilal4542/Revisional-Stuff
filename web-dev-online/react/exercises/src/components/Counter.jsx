import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        if(count === 0) return;
        setCount(count - 1)
        
    }

  return (
    <div>
      <button onClick={increment}>Plus</button>
      <p>{count}</p>
      <button onClick={decrement}>Minus</button>
    </div>
  )
}

export default Counter
