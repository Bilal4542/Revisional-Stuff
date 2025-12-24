import { useState } from 'react'
import BarcodeGenerator from './BarcodeGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarcodeGenerator/>
    </>
  )
}

export default App
