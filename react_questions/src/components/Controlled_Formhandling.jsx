import { useState } from "react";

function ControlledForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleValidate = () => {
    let err = {};
    if (!data.name.trim()) err.name = "Enter a valid name";
    if (!data.email.trim()) err.email = "Enter an email";
    else if (!data.email.includes("@")) err.email = "Enter a valid email";
    if (!data.password) err.password = "Enter a password";
    else if (data.password.length < 6) err.password = "Password must be at least 6 characters";
    if (!data.confirmpassword) err.confirmpassword = "Re-enter your password for confirmation";
    else if (data.confirmpassword !== data.password) err.confirmpassword = "Passwords didn't match";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Registration Form
          </h2>

          <label className="block text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleData}
            value={data.name}
            className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <label className="block text-gray-700 font-medium mt-4">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleData}
            value={data.email}
            className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label className="block text-gray-700 font-medium mt-4">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleData}
            value={data.password}
            className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <label className="block text-gray-700 font-medium mt-4">Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Re-enter your password"
            onChange={handleData}
            value={data.confirmpassword}
            className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.confirmpassword && <p className="text-red-500 text-sm">{errors.confirmpassword}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg mt-6 hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            Data Submitted Successfully ✅
          </h1>
          <div className="text-gray-700">Name: {data.name}</div>
          <div className="text-gray-700">Email: {data.email}</div>
          <h2 className="mt-4 text-indigo-600 font-semibold">
            Thanks for submitting!
          </h2>
        </div>
      )}
    </div>
  );
}

export default ControlledForm;