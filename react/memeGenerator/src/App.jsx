import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Edit from './pages/Edit'

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={ <Edit/> }/>
      </Routes>
    </div>
  )
}

export default App
