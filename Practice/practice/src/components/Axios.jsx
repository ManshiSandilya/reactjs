import { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", { name })
      .then((res) => {
        setUser([...users, res.data]);
        setName("");
      })
      .catch((err) => console.log("err", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUser(users.filter((user) => user.id !== id)))
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">User Manager</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 mb-6 w-full max-w-md"
      >
        <input
          type="text"
          value={name}
          placeholder="Add user..."
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      <ul className="w-full max-w-md space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium text-gray-700">{user.name}</span>
            <button
              onClick={() => handleDelete(user.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosExample;