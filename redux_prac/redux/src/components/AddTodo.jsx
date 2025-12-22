import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // prevent empty todos
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg max-w-md mx-auto mt-6"
    >
      <input
        value={input}
        type="text"
        name="addtodo"
        placeholder="Enter a new task..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        ➕ Add
      </button>
    </form>
  );
}

export default AddTodo;