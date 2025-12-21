import React from 'react'
import { motion } from "framer-motion";;

const Text = () => {
  return (
      // <Draggable bounds='parent'>
      //   <h2 className='text-2xl'>I am Text</h2>
      // </Draggable>
      <>
      <motion.div
        drag                  // Makes it draggable
        dragMomentum={true}   // Adds inertia when you release
        className="cursor-move select-none">
        <h2 className="text-2xl font-bold">I am draggable</h2>
      </motion.div>
      </>
  )
}

export default Text
