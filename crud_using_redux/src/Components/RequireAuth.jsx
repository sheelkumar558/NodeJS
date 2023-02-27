import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  return children;
};
