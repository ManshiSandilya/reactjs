import { useEffect, useState } from "react";

function Fetch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email, age: Number(age) };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((createdUser) => {
        setUsers([...users, createdUser]);
        setName("");
        setEmail("");
        setAge("");
      });
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const handleUpdate = (id) => {
    const newAge = Number(prompt("Enter the new age"));

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ age: newAge }),
    }).then(() => {
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

export default Fetch;
