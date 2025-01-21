import { Outlet } from "react-router-dom";
import AdminBar from "../../Components/AdminBar/AdminBar";
import useRole from "../../Hooks/useRole";
import SellerBar from "../../Components/SellerBar/SellerBar";
import UserBar from "../../Components/UserBar/UserBar";

const Dashboard = () => {
  const [role, isLoading] = useRole();
  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-[#F2F3F5] py-3">
        <h2 className="text-center w-11/12 mx-auto text-xl p-3 shadow-xl font-bold bg-[#a1c4f54e] rounded-lg">
          Health Care
        </h2>
        {role === "admin" && <AdminBar></AdminBar>}
        {role === "seller" && <SellerBar></SellerBar>}
        {role === "user" && <UserBar></UserBar>}
      </div>
      <div className="w-3/4 mx-auto p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
