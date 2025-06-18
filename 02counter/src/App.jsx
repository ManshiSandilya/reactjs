import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1)
    }
  }

  return (
    <>
      <div>
        <h1>01 Basic Counter Project with Vite + React</h1><br /><br />
      </div>
      <div>
        <h2>Counter value: {counter}</h2><br />
      </div>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
