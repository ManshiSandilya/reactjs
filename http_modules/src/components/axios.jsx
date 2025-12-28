import { useEffect, useState } from "react";
import axios from "axios";
function Axios() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email, age: Number(age) };

    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setName("");
        setEmail("");
        setAge("");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const handleUpdate = (id) => {
    const newAge = Number(prompt("Enter the new age"));

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { age: newAge }).then(() => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, age: newAge } : user
        )
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          User Management
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={name}
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            value={email}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="age"
            value={age}
            placeholder="Age"
            type="number"
            onChange={(e) => setAge(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {/* USER LIST */}
        <ul className="mt-6 space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 border rounded-lg p-4"
            >
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm">
                  Age: {user.age ?? "N/A"}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleDelete(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>

                <button
                  type="button"
                  onClick={() => handleUpdate(user.id)}
                  className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Axios;
