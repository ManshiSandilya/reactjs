import { increament, decreament, reset } from "../features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Redux Counter</h1>

        <div className="text-6xl font-extrabold text-indigo-600 mb-8">
          {counter}
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => dispatch(increament())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decreament())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="mt-6 w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;