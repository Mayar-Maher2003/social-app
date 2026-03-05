import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token")
  );
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userToken) {
      const decoded = jwtDecode(userToken);
      setUserData(decoded);
    }
  }, [userToken]);

  function saveUserToken(token) {
    localStorage.setItem("token", token);
    setUserToken(token);
  }

  function logout() {
    localStorage.removeItem("token");
    setUserToken(null);
    setUserData(null);
  }

  return (
    <AuthContext.Provider
      value={{ userToken, userData, saveUserToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}