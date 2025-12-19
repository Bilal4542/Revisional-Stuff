import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>MEME Generator</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
