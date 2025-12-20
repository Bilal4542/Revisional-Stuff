import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';

const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1)
    }
  return (
    <div className='flex items-center justify-center'>
        <div className="w-[70%]">
        <div className="w-[40%]">
        <img src={params.get('url')} alt="" />
        {Array(count).fill(0).map((e)=>(
            <Text/>
        ))}
      </div>
      <div className="">
         <button onClick={addText}  className="mt-2 rounded-lg bg-green-600 cursor-pointer hover:bg-green-700 ease-in-out duration-300 px-4 py-2 font-medium  transition">
            Add text
          </button>
      </div>
        </div> 
    </div>
  )
}

export default Edit
