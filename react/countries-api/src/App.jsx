import React, { useState } from 'react'
import Search from './Search'
import CountryCard from './CountryCard'


function App() {

  const [country, setCountry] = useState(null)

  const fetchCouontry = async (name) => {
    console.log(name)
    const response = await fetch('https://restcountries.com/v3.1/name/' + name)
    const data = await response.json()
    setCountry(data[0])
  }
  
  return (
    <>
    <Search fetch={fetchCouontry}/>
    <CountryCard country={country}/>
    

    </>
  )
}

export default App
