// Implement an event handler in a React component that updates the state when an input field value changes. 
// Display the updated value on the screen

import { useState } from "react";

function EventHandler() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          React Event Handler Demo
        </h2>

        <input
          type="text"
          placeholder="Type something..."
          name="newtext"
          value={inputValue}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <h1 className="mt-6 text-xl font-semibold text-indigo-600 text-center">
          Updated Value: <span className="text-gray-900">{inputValue}</span>
        </h1>
      </div>
    </div>
  );
}

export default EventHandler;