import React from 'react'
import about from '../assets/about.png'
const AboutUs = () => {
  return (
    <div className='flex items-center justify-center my-18'>
      <div className="flex items-center justify-center w-[90%]">
        <div className="w-[50%]">
            <img src={about} alt="" />
        </div>
        <div className="w-[50%] flex flex-col justify-center gap-6">
            <h1 className='font-bold text-[40px] uppercase'>About Us</h1>
            <h2 className='font-bold text-[26px] uppercase'>We are Peshawari Chappal & Peshawari Chaddar Shop since 1998</h2>
            <p className='uppercase text-[16px]'>Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat. Dictumst dictumst laoreet sit viverra et. Et condimentum vivamus aliquet quis penatibus mauris pretium mauris.</p>
            <p className='uppercase text-[16px]'>Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.</p>
            <button className="bg-[rgba(255,191,61,1)] text-white px-24 py-4 rounded-4xl font-bold uppercase text-[16px] cursor-pointer hover:bg-[#f9b52c] transition-all ease-in-out duration-300 w-fit">More About Us</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
