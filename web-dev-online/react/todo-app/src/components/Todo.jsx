import React, { useState } from 'react'
import Item from './Item'

const Todo = () => {
    const [list, setList] = useState([])

const [input, setInput] = useState('')

const handleInput = (e) => {
    setInput(e.target.value)
}


const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
        id: Math.floor(Math.random() * 123456789),
        name: input,
        status: 'pending'
    }
    const prevTask = list
    setList([...prevTask, task])
    setInput('')
}

const doneHandler = (id) => {
    const updatedList = list.map((element)=>{
        if(element.id === id) element.status = 'completed'
        return element;
    })
    setList(updatedList)
    
    
}
const deleteHandler = (id) => {
    const updatedList = list.filter((element)=>{
      return  element.id !== id
      
    })
    setList(updatedList)

}

const handleClearAll = () => {
    setList([])
}

  return (
    <div className='w-full h-screen bg-[aliceblue] pt-16'>
        <div className="bg-white p-10 w-[40%] m-auto rounded shadow">
            <div className="flex flex-col gap-4">
                <h1 className='font-bold text-3xl'>Make Your Todo List</h1>
                <div className="flex flex-col gap-2">
                    <p className='text-lg'>Enter Your Todo Here...</p>
                    <form className='flex'>
                        <input className='flex-1 h-[30px] py-0 px-2 border border-gray-300 rounded-tl-lg rounded-bl-lg' type="text" placeholder='Your Task' value={input}  onChange={handleInput}/>
                        <button className='py-0 px-4 rounded-tr-lg rounded-br-lg hover:scale-102 cursor-pointer duration-100 bg-[#9dc7ed]' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            <h1 className='text-2xl font-semibold mt-4'>Your Task</h1>
            <ul>
            {list.map((element) => {
                return <li><Item list={element} doneItem={doneHandler} deleteItem={deleteHandler}/></li>
            })}
            </ul>
        {list.length !== 0 && <button onClick={handleClearAll} className='bg-gray-300 mt-8 px-6 py-2 rounded-xl cursor-pointer hover:scale-102 duration-300'>Clear All</button>}
        </div>
    </div>
  )
}

export default Todo
