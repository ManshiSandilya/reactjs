import { useEffect, useState } from "react";

function FetchReq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

 const handleDelete = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      setData((prev) => prev.filter((d) => d.id !== id));
    })
    .catch((err) => console.error(err));
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
        
      
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white tracking-wide">
            Users Directory
          </h2>
          <p className="text-white/80 mt-2">
            Simple fetch with delete interaction
          </p>
        </div>

        {data.length === 0 && (
          <p className="text-center text-white text-lg">
            🚫 No users left
          </p>
        )}

       
        <div className="space-y-4">
          {data.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg">
                  {d.name.charAt(0)}
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  {d.name}
                </span>
              </div>

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

export default FetchReq;
