import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/healthlogo.png";
import userImage from "../../assets/user.png";
import { BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io"; // close icon
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useRole from "../../Hooks/useRole";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ThemeToggler from "../../Components/Theme/ThemeToggler";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [role] = useRole();
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User Logout"))
      .catch((error) => console.log(error));
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full nav sticky top-0 z-40">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`relative w-64 bg-white dark:bg-gray-900 h-full shadow-xl p-4 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#4E97FD]">Menu</h2>
            <IoMdClose
              className="text-2xl text-red-500 cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white font-semibold block p-2 rounded"
                    : "text-gray-700 dark:text-white block p-2"
                }
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white font-semibold block p-2 rounded"
                    : "text-gray-700 dark:text-white block p-2"
                }
              >
                {t("shop")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white font-semibold block p-2 rounded"
                    : "text-gray-700 dark:text-white block p-2"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu
                className="text-xl cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              />
            </div>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-14" src={logo} alt="Logo" />
              <h2 className="lg:text-xl text-lg font-bold lg:flex hidden">
                {t("logo")}
              </h2>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white font-semibold"
                    : "text-gray-500 bg-transparent"
                }
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white semibold"
                    : "text-gray-500 bg-transparent"
                }
              >
                {t("shop")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white semibold"
                    : "text-gray-500 bg-transparent"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* Dark/Light Toggle */}
          <ThemeToggler />

          {/* Avatar Menu */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.email ? (
                  <img alt="User Profile" src={user?.photoURL} />
                ) : (
                  <img src={userImage} alt="Default User" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile">{t("profile")}</Link>
              </li>
              <li>
                {role === "admin" && (
                  <Link to="/dashboard/adminHome">{t("dashboard")}</Link>
                )}
                {role === "seller" && (
                  <Link to="/dashboard/sellerHome">{t("dashboard")}</Link>
                )}
                {role === "user" && (
                  <Link to="/dashboard/userHistory">{t("dashboard")}</Link>
                )}
              </li>
              {user && (
                <li onClick={handleLogout}>
                  <Link to="/login">{t("logout")}</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Cart */}
          <Link to="/cart">
            <button className="px-4 py-3 rounded-2xl flex items-center gap-1 relative z-10">
              <BsCart3 className="text-[#4E97FD] text-xl font-semibold" />
              <div className="px-[5px] rounded-full dark:text-white font-bold text-sm absolute bottom-5 -right-1">
                {cart.length}
              </div>
            </button>
          </Link>

          {/* Login Button */}
          {!user && (
            <div>
              <Link to="/login">
                <button className="px-4 py-2 bg-[#4E97FD] text-white font-semibold rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
