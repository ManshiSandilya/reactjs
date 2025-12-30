import React, { useState, useEffect, useMemo, useCallback } from "react";

// CHILD COMPONENT
export const  UserItem = React.memo(({ user, onSelect }) => {
  console.log("Rendering:", user.name);

  return (
    <li>
      {user.name} ({user.email})
      <button onClick={() => onSelect(user.id)}>Select</button>
    </li>
  );
});
