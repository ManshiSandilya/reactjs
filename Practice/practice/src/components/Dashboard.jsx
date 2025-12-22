
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const { name, course } = location.state || {};

  return (
    <>
      <div>Name: {name}</div>
      <div>Course: {course}</div>
    </>
  );
}

export default Dashboard;