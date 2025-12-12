import React from 'react'
import homeImage1 from '../assets/homeImage1.png'
import homeImage2 from '../assets/homeImage2.png'
import homeImage3 from '../assets/homeImage3.png'
import homeImage4 from '../assets/homeImage4.png'
import homeImage5 from '../assets/homeImage5.png'
import homeImage6 from '../assets/homeImage6.png'

const Cards = () => {
  return (
    <div className='flex items-center justify-center mt-[650px] mb-10'>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center justify-items-center gap-y-6 w-[90%]">
            <div className="flex flex-col items-center justify-center bg-[rgba(47,47,47,1)] rounded-[40px] w-[370px] h-[400px]">
                <img src={homeImage1} className='h-80' alt="" />
                <p className='text-white font-semibold text-xl'>Chappal Name 01</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[rgba(47,47,47,1)] rounded-[40px] w-[370px] h-[400px]">
                <img src={homeImage2} className='h-80' alt="" />
                <p className='text-white font-semibold text-xl'>Chappal Name 01</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[rgba(47,47,47,1)] rounded-[40px] w-[370px] h-[400px]">
                <img src={homeImage3} className='h-80' alt="" />
                <p className='text-white font-semibold text-xl'>Chappal Name 01</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[rgba(47,47,47,1)] rounded-[40px] w-[370px] h-[400px]">
                <img src={homeImage4} className='h-80' alt="" />
                <p className='text-white font-semibold text-xl'>Chappal Name 01</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[rgba(47,47,47,1)] rounded-[40px] w-[370px] h-[400px]">
                <img src={homeImage5} className='h-80' alt="" />
                <p className='text-white font-semibold text-xl'>Chappal Name 01</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[rgba(47,47,47,1)] rounded-[40px] w-[370px] h-[400px]">
                <img src={homeImage6} className='h-80' alt="" />
                <p className='text-white font-semibold text-xl'>Chappal Name 01</p>
            </div>
           
        </div>
 
    </div>
  )
}

export default Cards
