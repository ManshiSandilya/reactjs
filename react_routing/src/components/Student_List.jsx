import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function StudentList() {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchTerm = searchParams.get("name") || "";

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight">
          Student List
        </h1>

        <input
          placeholder="🔍 Search by name..."
          className="p-3 border border-gray-300 rounded-xl mb-6 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          value={searchTerm}
          onChange={(e) => setSearchParams({ name: e.target.value })}
        />

        <ul className="divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center py-5 hover:bg-indigo-50 px-4 rounded-lg transition"
            >
              <div>
                <p className="font-semibold text-lg text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <button
                onClick={() =>
                  navigate(`/student/${user.id}`, {
                    state: {
                      from: "Search Page",
                      time: new Date().toLocaleTimeString(),
                    },
                  })
                }
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
              >
                View Details →
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentList;