import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-0 m-0">
      {/* Full-screen container */}
      <div className="w-screen h-screen flex flex-col items-center justify-center p-8">
        
        {/* Main card that fills most of the screen */}
        <div className="w-full h-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-500 bg-white flex flex-col">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-400 to-yellow-400 p-8 text-center relative flex-shrink-0">
            <h1 className="text-6xl font-bold text-white drop-shadow-md">
              <span className="text-blue-600">Dora</span>
              <span className="text-yellow-300">Pika</span>
              <span className="text-white">Pass</span>
            </h1>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full border-4 border-blue-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area that grows to fill space */}
          <div className="flex-grow p-10 pt-16 flex flex-col">
            
            {/* Password display - large and centered */}
            <div className="flex shadow-lg rounded-full overflow-hidden border-2 border-blue-300 bg-white mb-10">
              <input
                type="text"
                value={password}
                className="outline-none w-full py-6 px-8 text-gray-800 font-mono text-2xl"
                placeholder="Your Password"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                className="outline-none bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-10 py-6 shrink-0 font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all text-2xl"
              >
                COPY
              </button>
            </div>

            {/* Controls - larger and more spread out */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 flex-grow">
              
              {/* Length slider - now taller */}
              <div className="bg-blue-50 p-8 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-blue-800">Password Length</span>
                  <span className="text-3xl font-bold bg-blue-500 text-white px-6 py-2 rounded-full">
                    {length}
                  </span>
                </div>
                <input 
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="w-full h-6 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  onChange={(e) => {setLength(e.target.value)}}
                />
              </div>

              {/* Options - larger toggles */}
              <div className="bg-yellow-50 p-8 rounded-2xl flex flex-col justify-center">
                <div className="space-y-8">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-2xl font-bold text-yellow-800">Include Numbers</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={numberAllowed}
                        onChange={() => setNumberAllowed(prev => !prev)}
                        className="sr-only"
                      />
                      <div className={`w-20 h-10 rounded-full shadow-inner transition ${numberAllowed ? 'bg-blue-500' : 'bg-gray-300'}`}>
                        <div className={`absolute w-10 h-10 bg-white rounded-full shadow-md transform transition ${numberAllowed ? 'translate-x-10' : 'translate-x-0'}`}></div>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-2xl font-bold text-yellow-800">Special Characters</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={charAllowed}
                        onChange={() => setCharAllowed(prev => !prev)}
                        className="sr-only"
                      />
                      <div className={`w-20 h-10 rounded-full shadow-inner transition ${charAllowed ? 'bg-yellow-500' : 'bg-gray-300'}`}>
                        <div className={`absolute w-10 h-10 bg-white rounded-full shadow-md transform transition ${charAllowed ? 'translate-x-10' : 'translate-x-0'}`}></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Characters at bottom - larger */}
            <div className="flex justify-between mt-auto">
              <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-24 h-14 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App