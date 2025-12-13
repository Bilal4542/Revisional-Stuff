import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[rgba(255,191,61,0.1)] flex items-center justify-center py-16'>
      <div className="w-[90%] flex justify-between flex-wrap">
        <div className="">
            <p className='font-bold text-[rgba(255,191,61,1)] text-4xl uppercase'>Logo</p>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className='font-bold text-[30px] uppercase text-[rgba(51,55,64,1)] mb-2'>Shop</h1>
            <a href="" className='text-[16px] font-bold'>Home</a>
            <a href="" className='text-[16px] font-bold'>Products</a>
            <a href="" className='text-[16px] font-bold'>Favorite</a>
            <a href="" className='text-[16px] font-bold'>New Arrival</a>
            <a href="" className='text-[16px] font-bold'>Most Popular</a>
            <a href="" className='text-[16px] font-bold'>Orders</a>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className='font-bold text-[30px] uppercase text-[rgba(51,55,64,1)] mb-2'>Customer Support</h1>
            <a href="" className='text-[16px] font-bold'>Refund & Exchange Policy</a>
            <a href="" className='text-[16px] font-bold'>About Us</a>
            <a href="" className='text-[16px] font-bold'>FAQs</a>
            <a href="" className='text-[16px] font-bold'>Contact Us</a>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className='font-bold text-[30px] uppercase text-[rgba(51,55,64,1)] mb-2'>Store Location</h1>
            <a href="" className='text-[16px] font-bold'>Lorem Ipsum dolor amet Uni Town, Peshawar</a>
            <a href="" className='text-[16px] font-bold'>(+92) 987 *** **90</a>
            <a href="" className='text-[16px] font-bold'>(+92) 987 *** **90</a>
            <a href="" className='text-[16px] font-bold'>Anees********@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
