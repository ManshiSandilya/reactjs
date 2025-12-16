import { useEffect, useState } from "react";

function FetchExample() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");

  // GET request
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log("err", err));
  }, []);

  // POST request
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(data => {
        setUser([...users, data]);
        setName(""); 
      })
      .catch(err => console.log("err", err));
  };

  // DELETE request
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then(() => setUser(users.filter(user => user.id !== id)))
      .catch(err => console.log("err", err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">CRUD OPERATION</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Add user"
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            ADD
          </button>
        </form>

        <ul className="space-y-2">
          {users.map(user => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg shadow-sm"
            >
              <span>{user.name}</span>
              <button
                onClick={() => deleteUser(user.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchExample;
