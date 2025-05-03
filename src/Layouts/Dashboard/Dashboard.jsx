import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminBar from "../../Components/AdminBar/AdminBar";
import SellerBar from "../../Components/SellerBar/SellerBar";
import UserBar from "../../Components/UserBar/UserBar";
import { Helmet } from "react-helmet-async";
import useRole from "../../Hooks/useRole";
import { Menu } from "lucide-react"; // Or use any icon library

const Dashboard = () => {
  const [role, isLoading] = useRole();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`custom-sidebar
          fixed lg:static top-0 left-0 z-50 min-h-screen w-[70%] sm:w-[50%] lg:w-[20%] py-3
          transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0
        `}
        >
          <h2 className="text-center w-11/12 mx-auto text-xl p-3 shadow-xl font-bold bg-[#a1c4f54e] rounded-lg">
            Health Care
          </h2>
          {role === "admin" && <AdminBar />}
          {role === "seller" && <SellerBar />}
          {role === "user" && <UserBar />}
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 lg:w-[80%] w-full p-4 ml-auto">
          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden mb-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
