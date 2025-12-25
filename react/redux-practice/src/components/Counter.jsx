import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className='counter'>
      <button onClick={()=>dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
