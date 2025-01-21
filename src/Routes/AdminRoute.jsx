import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  const location = useLocation();
  if (user && role === "admin") {
    return children;
  }
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default AdminRoute;
