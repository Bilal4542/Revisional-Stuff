import React from 'react'
import ImageCard from './ImageCard'

const Images = ({images}) => {
  return (
    <div className="flex item-center justify-center">
        <div className="w-[90%] flex item-center justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {images.map((element) => {
            return  <ImageCard images={element}/>
        })}
     
    </div>
        </div>
    </div>
  )
}

export default Images
