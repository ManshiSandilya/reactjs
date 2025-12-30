import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">About Us</h1>
      <p className="max-w-lg text-center mb-6">
        At IceCream World, we believe every scoop tells a story. 
        From classic flavors to creative blends, we bring joy in every bite.
      </p>
      <button
        onClick={() => navigate("/Contact")}
        className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
      >
        Contact Us
      </button>
    </div>
  );
}

export default About;