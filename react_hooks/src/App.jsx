import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/Parent'
import USEREDUCER from './components/useReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <USEREDUCER/>
    </>
  )
}

export default App
