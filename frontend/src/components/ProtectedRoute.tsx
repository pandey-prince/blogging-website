
import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../hooks";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;
