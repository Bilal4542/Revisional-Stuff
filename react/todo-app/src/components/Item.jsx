import React from 'react'
import { MdDelete, MdOutlineDone } from "react-icons/md";


const Item = ({list, deleteItem, doneItem}) => {
  return (
    <div className='flex items-center justify-between bg-gray-200 p-2 mb-2 mt-4 rounded'>
      {list.status === 'pending' ? <p className='text-lg'>{list.name}</p> : <del><p className='text-lg'>{list.name}</p></del>}
      <div className="flex items-center gap-4 text-xl">
        <button onClick={()=>doneItem(list.id)}><MdOutlineDone className='text-green-600 cursor-pointer hover:scale-105' /></button>
        <button onClick={()=>deleteItem(list.id)}><MdDelete className='text-red-600 cursor-pointer hover:scale-105'/></button>
      </div>
    </div>
  )
}

export default Item
