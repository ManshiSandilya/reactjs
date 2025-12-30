import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">Contact Us</h1>
      <p className="max-w-lg text-center mb-6">
        Got questions or want to share your ice cream love? 
        Reach out to us anytime!
      </p>
      <button
        onClick={() => navigate("/Home")}
        className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg shadow-md hover:bg-yellow-500 transition"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Contact;