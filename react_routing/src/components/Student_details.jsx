import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation, Link, Outlet } from "react-router-dom";
import axios from "axios";

function StudentDetails() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const ids = Number(id);
  const secret = location.state;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${ids}`)
      .then((res) => setUser(res.data));
  }, [ids]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-6 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-indigo-600 font-medium hover:text-indigo-800 transition"
        >
          ← Back
        </button>

        {secret && (
          <div className="mb-6 p-3 bg-indigo-50 rounded-lg text-xs text-gray-600 text-center shadow-sm">
            <span className="font-semibold">Came from:</span> {secret.from} | 
            <span className="font-semibold ml-2">Time:</span> {secret.time}
          </div>
        )}

        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
          Student Details
        </h1>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">👤 Name</span>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">📧 Email</span>
            <span className="text-blue-600 hover:underline cursor-pointer">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">📞 Phone</span>
            <span>{user.phone}</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button
            disabled={ids <= 1}
            onClick={() => navigate(`/student/${ids - 1}`, { state: secret })}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
          >
            ⬅ Prev
          </button>
          <button
            disabled={ids >= 10}
            onClick={() => navigate(`/student/${ids + 1}`, { state: secret })}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50"
          >
            Next ➡
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <Link
            to="more"
            className="inline-block text-sm text-indigo-700 font-semibold bg-indigo-100 px-4 py-2 rounded-full hover:bg-indigo-200 transition"
          >
            Show Company Details →
          </Link>

          <div className="mt-6">
            <Outlet context={{ user }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;