import { useEffect, useState } from "react";

function FetchPost() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newuser = { name, email };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newuser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((prev) => [...prev, data]);
        setName("");
        setEmail("");
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 grid md:grid-cols-2 gap-8">
        
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Add New User
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-teal-500 text-white font-bold hover:bg-teal-600 active:scale-95 transition"
            >
              Add User
            </button>
          </form>
        </div>

        {/* User List Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Users List
          </h2>

          <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {user.map((u) => (
              <li
                key={u.id}
                className="flex flex-col bg-gray-50 border rounded-xl p-4 hover:shadow-md transition"
              >
                <span className="font-semibold text-gray-800">
                  {u.name}
                </span>
                <span className="text-sm text-gray-500">
                  {u.email}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FetchPost;
