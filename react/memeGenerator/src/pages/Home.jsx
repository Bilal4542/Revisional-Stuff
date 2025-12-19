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
    <div>
        {data.map((item)=>
        <Card img={item.url} title={item.name}/>)
        }
      
    </div>
  )
}

export default Home
