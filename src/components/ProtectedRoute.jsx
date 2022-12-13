import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}

export default ProtectedRoute;
