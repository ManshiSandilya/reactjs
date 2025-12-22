// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;