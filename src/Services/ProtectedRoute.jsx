import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  let auth = localStorage.getItem("isLoggedIn");
  return auth? <Outlet /> : <Navigate to='/signin' />;
};

export default ProtectedRoute;

