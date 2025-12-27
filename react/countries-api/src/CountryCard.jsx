import React from 'react'

const CountryCard = ({country}) => {
    console.log(country)
    if(country === null) return <p></p>
  return (
    <div className='flex items-center justify-center w-full m-auto flex-col mt-5'>
      <img className='w-[45%] rounded-2xl' src={country.flags.png} alt="" />
      <div className="w-[43%]">
        <h1 className='text-3xl font-bold mt-1 text-center'>{country.name.common}</h1>
        <p className='flex items-center justify-between font-semibold'><span>Area: {country.area}</span><span>Capital: {country.capital[0]}</span></p>
      </div>
    </div>
  )
}

export default CountryCard
