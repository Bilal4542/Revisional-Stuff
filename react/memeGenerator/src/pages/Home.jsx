import React, { useEffect} from 'react'
import Card from '../components/Card'
import { getAllMemes } from '../api/memes'
import { useState } from 'react'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        getAllMemes().then((memes)=> setData(memes.data.memes))
    },[])
  return (
    <>
     <h1 className='text-4xl text-center my-4 font-black'>MEME Generator</h1>
  <div className="flex items-center justify-center">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%]'>
        {data.map((item)=>
        <Card img={item.url} title={item.name}/>)
        }
      
    </div>
  </div>
  </>
  )
}

export default Home
