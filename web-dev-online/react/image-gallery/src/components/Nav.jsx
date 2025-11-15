import React from 'react'

const Nav = () => {
  return (
    <div className='bg-black text-white flex items-center justify-center'>
      <div className="py-6 w-[90%] flex flex-col md:flex-row items-center justify-between">
        <div className="">
          <h1 className='text-[40px] font-bold'>Image Gallery</h1>
        </div>
        <div className="flex items-center gap-[20px]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Images</a>
          <a href="">Download</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
