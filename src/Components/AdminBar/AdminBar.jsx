import { FaEnvelope, FaThList } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminBar = () => {
  return (
    <div className="list-none pt-6">
      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
        >
          {" "}
          <IoMdHome className="text-2xl"></IoMdHome>
          Admin Home
        </NavLink>
      </li>

      <li className="mb-4 px-4">
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive }) =>
            isActive
              ? "text-[#333333] bg-[#c7c7c9] font-semibold flex items-center gap-2 text-lg p-2 rounded-lg"
              : "text-black bg-transparent flex items-center gap-2 text-lg font-semibold p-2 rounded-lg"
          }
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
  );
};

export default AdminBar;
