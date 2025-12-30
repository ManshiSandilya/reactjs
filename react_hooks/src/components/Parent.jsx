import React, { useState, useEffect, useMemo, useCallback } from "react";

// CHILD COMPONENT
const UserItem = React.memo(({ user, onSelect }) => {
  console.log("Rendering:", user.name);

  return (
    <li>
      {user.name} ({user.email})
      <button onClick={() => onSelect(user.id)}>Select</button>
    </li>
  );
});

// PARENT COMPONENT
export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleSelectUser = useCallback((id) => {
    alert(`Selected User ID: ${id}`);
  }, []);

  return (
    <div>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <p>Filtered Users: {filteredUsers.length}</p>

      <ul>
        {filteredUsers.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onSelect={handleSelectUser}
          />
        ))}
      </ul>
    </div>
  );
}
