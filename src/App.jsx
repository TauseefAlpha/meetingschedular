import { useState } from 'react'
import './App.css'
import Formcomp from './components/formcomp'
import Clendalycomp from './components/clendalycomp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clendalycomp />
      <Formcomp />
    </>
  )
}

export default App
