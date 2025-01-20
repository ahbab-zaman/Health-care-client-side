import { FaEnvelope, FaThList } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
        <div className="w-52 min-h-screen bg-[#4e97fd] py-3">
          <h2 className="text-center text-xl -ml-6 font-bold">Health Care</h2>
          <div className="list-none pl-4 pt-6">
            <li className="mb-4">
              <NavLink
                to="/dashboard/adminHome"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                {" "}
                <IoMdHome className="text-2xl"></IoMdHome>
                Admin Home
              </NavLink>
            </li>

            <li className="mb-4">
              <NavLink
                to="/dashboard/manageUsers"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                {" "}
                <FaThList></FaThList>
                Manage Users
              </NavLink>
            </li>

            <div className="divider w-[90%] mx-auto"></div>

            <div className="list-none pl-4 ">
              <li className=" mb-4">
                <NavLink
                  to="/"
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  {" "}
                  <IoMdHome className="text-2xl"></IoMdHome>
                  Home
                </NavLink>
              </li>

              <li className=" mb-4">
                <NavLink
                  to="/shop"
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  {" "}
                  <MdShoppingBag className="text-2xl"></MdShoppingBag>
                  Shop
                </NavLink>
              </li>

              <li className="mb-4">
                <NavLink
                  to="/contact"
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  {" "}
                  <FaEnvelope className="text-2xl"></FaEnvelope>
                  Join Us
                </NavLink>
              </li>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
  );
};

export default Dashboard;
