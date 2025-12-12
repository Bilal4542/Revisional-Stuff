import React from 'react'
import newArrivalImage1 from '../assets/newArrivalImage1.png'
import newArrivalImage2 from '../assets/newArrivalImage2.png'
import newArrivalImage3 from '../assets/newArrivalImage3.png'
import newArrivalImage4 from '../assets/newArrivalImage4.png'

const NewArrivalCards = () => {
  return (
    <div className="flex items-center justify-end gap-x-36 flex-col my-10">
        <div className="flex items-center justify-between w-[90%] my-10">
            <div className=""></div>
            <div className=""><h1 className='text-4xl uppercase font-bold'>New Arrival</h1></div>
            <div className=""><a href="" className='text-[rgba(255,191,61,1)] font-bold text-[20px] uppercase mr-1'>View All</a></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 w-[90%]">
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={newArrivalImage1} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={newArrivalImage2} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={newArrivalImage3} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={newArrivalImage4} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewArrivalCards
