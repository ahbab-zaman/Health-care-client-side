import { FaEnvelope, FaThList } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import AdminBar from "../../Components/AdminBar/AdminBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-52 min-h-screen bg-[#F2F3F5] py-3">
        <h2 className="text-center w-11/12 mx-auto text-xl p-3 shadow-xl font-bold bg-[#a1c4f54e] rounded-lg">Health Care</h2>
        <AdminBar></AdminBar>
      </div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
