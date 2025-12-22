import React, { createRef, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';
import * as htmlToImage from 'html-to-image'


const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = useRef(null)

    const addText = () => {
        setCount(count + 1)
    }

     const downloadImage = async () => {
    if (!memeRef.current) return

    const dataUrl = await htmlToImage.toJpeg(memeRef.current, {
      quality: 0.95
    })

    

    const link = document.createElement('a')
    link.download = 'meme.jpeg'
    link.href = dataUrl
    link.click()
  }

  return (
    <div className='flex items-center justify-center'>
        <div className="w-[70%]" >
        <div ref={memeRef} className="w-[40%]">
        <img  src={params.get('url')} alt=""/>
        {Array(count).fill(0).map((e)=>(
            <Text />
        ))}
      </div>
      <div className="space-x-2">
         <button onClick={addText}  className="mt-2 rounded-lg bg-green-600 cursor-pointer hover:bg-green-700 ease-in-out duration-300 px-4 py-2 font-medium  transition">
            Add text
          </button>
         <button variant="success" onClick={downloadImage}  className="mt-2 rounded-lg bg-green-600 cursor-pointer hover:bg-green-700 ease-in-out duration-300 px-4 py-2 font-medium  transition">
           Download
          </button>
      </div>
        </div> 
    </div>
  )
}

export default Edit
