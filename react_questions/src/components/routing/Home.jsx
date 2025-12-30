import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-200 flex flex-col items-center justify-center text-gray-800">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold mb-4 text-pink-600 drop-shadow-lg">
        Welcome to IceCream World 🍨
      </h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        Discover the sweetest flavors, coolest treats, and happiest scoops. 
        Your ice cream adventure starts here!
      </p>

      {/* Navigation Buttons */}
      <div className="space-x-4">
        <button
          onClick={() => navigate("/About")}
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          About Us
        </button>
        <button
          onClick={() => navigate("/Contact")}
          className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Contact
        </button>
      </div>

      {/* Featured Flavors */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <img
            src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg"
            alt="Vanilla Ice Cream"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold text-pink-600">Classic Vanilla</h2>
          <p>Smooth, creamy, and timeless. A scoop of happiness!</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <img
            src="https://images.pexels.com/photos/1893567/pexels-photo-1893567.jpeg"
            alt="Chocolate Ice Cream"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold text-yellow-600">Rich Chocolate</h2>
          <p>Indulge in the rich, velvety taste of pure cocoa delight.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <img
            src="https://images.pexels.com/photos/10281286/pexels-photo-10281286.jpeg"
            alt="Strawberry Ice Cream"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold text-purple-600">Fresh Strawberry</h2>
          <p>Sweet, fruity, and refreshing — the taste of summer!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;



// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import Home from "./components/routing/Home";
// import About from "./components/routing/About";
// import Contact from "./components/routing/Contact";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navbar */}
//       <nav className="flex justify-center space-x-6 bg-pink-200 py-4 shadow-md">
//         <NavLink to="/Home" className="text-pink-700 font-bold hover:underline">
//           Home
//         </NavLink>
//         <NavLink to="/About" className="text-pink-700 font-bold hover:underline">
//           About
//         </NavLink>
//         <NavLink to="/Contact" className="text-pink-700 font-bold hover:underline">
//           Contact
//         </NavLink>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;