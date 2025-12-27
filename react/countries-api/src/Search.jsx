import React, { useState } from 'react'

const Search = ({fetch}) => {

    const [input, setInput] = useState('')
    
    const handleSearch = () => {
        fetch(input)
    }

  return (
    <div className='flex items-center justify-center space-x-3 mt-5 w-[50%] m-auto'>
      <input className='p-2 outline-none border border-gray-400 rounded-3xl w-full text-[18px]' onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter Country Name...' />
      <button className='bg-blue-500 text-white text-[18px] py-2 px-5 rounded-3xl hover:bg-blue-400 cursor-pointer transition-all ease-in-out duration-300' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
