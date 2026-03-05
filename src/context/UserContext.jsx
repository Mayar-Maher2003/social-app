import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function saveUser(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }

  function clearUser() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}