// Users.js
import { useNavigate } from "react-router-dom";

function User() {
  const users = [
    { id: 1, name: "manu", course: "btech" },
    { id: 2, name: "khushi", course: "bsc" },
  ];

  const navigate = useNavigate();

  const openDashboard = (user) => {
    navigate(`/dashboard/${user.id}`, { state: user });
  };

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => openDashboard(user)}>Details</button>
        </li>
      ))}
    </div>
  );
}

export default User;