import React, { createRef, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';


const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = useRef(null)

    const addText = () => {
        setCount(count + 1)
    }


 const handleDownload = async () => {
  const container = memeRef.current
  if (!container) return

  const img = container.querySelector("img")
  const texts = container.querySelectorAll(".draggable-text")

  // Create canvas
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")

  // Load image
  const image = new Image()
  image.crossOrigin = "anonymous"
  image.src = img.src

  image.onload = () => {
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight

      const containerRect = container.getBoundingClientRect()
  const scaleX = image.naturalWidth / containerRect.width
  const scaleY = image.naturalHeight / containerRect.height


    // Draw image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)


    // Draw text
    texts.forEach((el) => {
      const text = el.dataset.text
      if (!text) return

      const rect = el.getBoundingClientRect()
      const parentRect = container.getBoundingClientRect()

      const x = (rect.left - containerRect.left) * scaleX
  const y = (rect.top - containerRect.top) * scaleY + 30

      ctx.font = "bold 60px Arial"
      ctx.fillStyle = "#000"
      ctx.fillText(el.innerText, x, y)
    })

    // Export PNG
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")

    const link = document.createElement("a")
    link.href = pngUrl
    link.download = "MyMeme.png"
    link.click()
  }
}


  return (
    <div className='flex items-center justify-center'>
        <div className="w-[70%]" >
        <div ref={memeRef} className="w-[60%]">
        <img  src={params.get('url')} alt=""/>
        {Array(count).fill(0).map((e)=>(
            <Text />
        ))}
      </div>
      <div className="space-x-2">
         <button onClick={addText}  className="mt-2 rounded-lg bg-green-600 cursor-pointer hover:bg-green-700 ease-in-out duration-300 px-4 py-2 font-medium  transition">
            Add text
          </button>
         <button variant="success" onClick={handleDownload}  className="mt-2 rounded-lg bg-green-600 cursor-pointer hover:bg-green-700 ease-in-out duration-300 px-4 py-2 font-medium  transition">
           Download
          </button>
      </div>
        </div> 
    </div>
  )
}

export default Edit
