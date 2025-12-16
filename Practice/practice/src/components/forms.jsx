import { useState } from "react";

function MyForm() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleData = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  };

  const handleValidate = () => {
    let newerr = {};

    if (formData.name === "") newerr.name = "Name is required";

    if (formData.email === "") {
      newerr.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newerr.email = "Enter a valid email";
    }

    if (formData.password === "") {
      newerr.password = "Password is required";
    } else if (formData.password.length < 6) {
      newerr.password = "Minimum 6 characters";
    }

    if (formData.confirmpassword === "") {
      newerr.confirmpassword = "Confirm password";
    } else if (formData.password !== formData.confirmpassword) {
      newerr.confirmpassword = "Passwords do not match";
    }

    setErrors(newerr);
    return Object.keys(newerr).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            Register
          </h2>

          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleData}
          />
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>

          <input
            className="w-full mt-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleData}
          />
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>

          <input
            className="w-full mt-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleData}
          />
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>

          <input
            className="w-full mt-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={formData.confirmpassword}
            onChange={handleData}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmpassword}
          </p>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-green-100 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-green-700">
            ✅ Form Submitted
          </h2>
          <p className="mt-2">
            <b>Name:</b> {formData.name}
          </p>
          <p>
            <b>Email:</b> {formData.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default MyForm;
