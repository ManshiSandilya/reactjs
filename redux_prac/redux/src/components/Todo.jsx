import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">📝 Todo List</h1>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
            >
              <span className="text-gray-800">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;