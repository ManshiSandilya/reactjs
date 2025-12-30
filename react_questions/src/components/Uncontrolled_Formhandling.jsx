import { useState, useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState({});

  const handleValidate = () => {
    const err = {};
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmpassword = confirmPasswordRef.current.value;

    if (name === "") err.name = "⚠️ Please enter a name";
    if (email === "") err.email = "📧 Email is required";
    else if (!email.includes("@")) err.email = "❌ Invalid email format";
    if (password === "") err.password = "🔑 Password is required";
    else if (password.length < 6) err.password = "🙅 Password must be 6+ chars";
    if (confirmpassword !== password) err.confirmpassword = "😕 Passwords don't match";

    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400 p-6">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md space-y-6 transform hover:scale-[1.02] transition"
        >
          <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-4">
            🎉 Fun Registration Form
          </h2>

          <div>
            <input
              type="text"
              placeholder="✨ Enter your name"
              name="name"
              ref={nameRef}
              className="w-full px-4 py-3 rounded-full border border-pink-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="📧 Enter your email"
              name="email"
              ref={emailRef}
              className="w-full px-4 py-3 rounded-full border border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="🔑 Enter your password"
              name="password"
              ref={passwordRef}
              className="w-full px-4 py-3 rounded-full border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="🔄 Confirm password"
              name="confirmpassword"
              ref={confirmPasswordRef}
              className="w-full px-4 py-3 rounded-full border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {error.confirmpassword && (
              <p className="text-red-500 text-sm mt-1">{error.confirmpassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:scale-105 transition"
          >
            🚀 Submit
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-extrabold text-green-600 mb-4">
            ✅ Submitted Successfully!
          </h1>
          <div className="text-gray-700">🎀 Name: {nameRef.current.value}</div>
          <div className="text-gray-700">📧 Email: {emailRef.current.value}</div>
          <h2 className="mt-4 text-pink-600 font-semibold">🎉 Thanks for joining the fun!</h2>
        </div>
      )}
    </div>
  );
}

export default UncontrolledForm;