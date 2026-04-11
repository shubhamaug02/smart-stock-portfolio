import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("stock-holding-token")) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
