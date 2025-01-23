import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const SellerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  if (user && role === "seller") {
    return children;
  }
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Navigate to="/" replace></Navigate>
    </div>
  );
};

export default SellerRoute;
