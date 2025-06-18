import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100 min-h-screen">
      <Cards place="Sydney" />
      <Cards place="Australia" img="https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg" />
      <Cards place="India" img="https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg" />
      <Cards place="Bali" img="https://images.pexels.com/photos/1544351/pexels-photo-1544351.jpeg" />
    </div>
  )
}

export default App
