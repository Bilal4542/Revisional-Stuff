import React from 'react'
import { FaCalendar, FaUser } from "react-icons/fa";

const ImageCard = ({images}) => {
  return (
     <div className='w-[400px] h-[400px] flex items-center justify-center flex-col p-[10px] border-[2px] border-gray-500 rounded-xl m-[30px] gap-[8px] hover:scale-105 transition-transform duration-300'>
        <img src={images.url} className='w-full h-full' alt="" />
      <h1 className='font-bold text-[25px]'>{images.title}</h1>
      <p className='text-[18px] text-center'>{images.desc}</p>
      <div className="flex items-center justify-between w-full">
        <p className="flex items-center gap-1">
            <span><FaUser /></span>
            <span>{images.author}</span>
        </p>
        <p className="flex items-center gap-1">
            <span><FaCalendar /></span>
            <span>{images.date}</span>
        </p>
      </div>
    </div>
  )
}

export default ImageCard
