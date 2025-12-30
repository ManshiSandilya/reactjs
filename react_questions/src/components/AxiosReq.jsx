import axios from "axios";
import { useEffect, useState } from "react";

function AxiosReq() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setData((prev) => prev.filter((d) => d.id !== id));
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Axios Users
          </h2>
          <p className="text-gray-500 mt-2">
            Fetching data using Axios
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-lg text-gray-600">
            Loading users...
          </p>
        )}

        {/* Empty State */}
        {!loading && data.length === 0 && (
          <p className="text-center text-lg text-red-500">
            No users found
          </p>
        )}

        {/* Users List */}
        <div className="space-y-4">
          {data.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg">
                  {d.name.charAt(0)}
                </div>

                <span className="text-lg font-semibold text-gray-700">
                  {d.name}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(d.id)}
                className="px-4 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 active:scale-95 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AxiosReq;
