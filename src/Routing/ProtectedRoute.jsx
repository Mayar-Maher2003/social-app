import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userToken } = useContext(AuthContext);

  if (!userToken) {
  return userToken ? children : <Navigate to="/auth/login" replace />;
  }

  return children;
};
export default ProtectedRoute;