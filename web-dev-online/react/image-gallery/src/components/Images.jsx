import React from 'react'
import ImageCard from './ImageCard'

const Images = ({images}) => {
  return (
    <div className='grid grid-cols-3'>
        {images.map((element) => {
            return  <ImageCard images={element}/>
        })}
     
    </div>
  )
}

export default Images
