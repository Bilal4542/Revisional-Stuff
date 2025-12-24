import React, { useState } from 'react'
import { motion } from "framer-motion";;

const Text = () => {
  const [editMode, setEditMode] = useState(false)
  const [val, setVal] = useState('Double Click to Edit')
  const [showHint, setShowHint] = useState(true)
  const [showDragHint, setShowDragHint] = useState(true)

   const handleEditStart = () => {
    setEditMode(true);
    setShowHint(false) // hide hint on edit
    setShowDragHint(false)
    if (val === 'Double Click to Edit') {
      setVal('')
    }
  }
  
  return (
      <>
      <motion.div
        drag                  // Makes it draggable
        dragMomentum={false}   // Adds inertia when you release
         data-text={val}
        className="draggable-text cursor-move select-none">
           {showHint && !editMode && (
        <p className="text-xs text-gray-600 mb-1">
          The text is Draggable
        </p>
      )}
        {
          editMode
          ?
          <div className="">
          <input className='border border-gray-400 p-2 text-xl font-semibold rounded-lg mt-1' value={val} onDoubleClick={(e)=>setEditMode(false)} onChange={(e)=>setVal(e.target.value)}/>
            <p className="text-xs text-gray-400 mt-1">
            Double click again for actual Mode
          </p>
          </div>
          :
          <h2 className="text-2xl font-bold" onDoubleClick={handleEditStart}>{val}</h2>
        }
      </motion.div>
      </>
  )
}

export default Text
