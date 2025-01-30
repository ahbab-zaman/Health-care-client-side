import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import userImage from "../../assets/user.png";
import { BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useRole from "../../Hooks/useRole";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [role] = useRole();
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeLanguage = (lng) => {
    console.log(lng);
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };
  return (
    <div className="w-full bg-white sticky top-0 z-10">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu className="text-xl"></IoMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#4E97FD] text-white font-semibold"
                      : "text-gray-500 bg-transparent"
                  }
                  to="/"
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#4E97FD] text-white semibold"
                      : "text-gray-500 bg-transparent"
                  }
                  to="/shop"
                >
                  {t("shop")}
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className="bg-[#4E97FD] text-white font-semibold">
                    Languages
                  </summary>
                  <NavLink className="font-semibold">
                    <ul className="p-2">
                      <li>
                        <a>English</a>
                      </li>

                      <li>
                        <a>Bangla</a>
                      </li>
                    </ul>
                  </NavLink>
                </details>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#4E97FD] text-white"
                      : "text-gray-500 bg-transparent"
                  }
                  to="/join"
                >
                 {t("shop")}
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-1">
              <img className="w-8" src={logo} alt="" />
              <h2 className="text-xl font-bold">{t("logo")}</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white font-semibold"
                    : "text-gray-500 bg-transparent"
                }
                to="/"
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white semibold"
                    : "text-gray-500 bg-transparent"
                }
                to="/shop"
              >
                {t("shop")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white font-semibold"
                    : "text-gray-500 bg-transparent"
                }
                to="/join"
              >
                {t("join")}
              </NavLink>
            </li>
            <li>
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-base-100 rounded-t-none p-2"
              >
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user && user?.email ? (
                  <img alt="User Profile" src={user?.photoURL} />
                ) : (
                  <img src={userImage} alt="" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                {t("profile")}
                </Link>
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
              {user ? (
                <li onClick={handleLogout}>
                  <Link to="/login">{t("logout")}</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link to="/cart">
            <button class="px-4 py-3 rounded-2xl flex items-center gap-1 relative z-10">
              <BsCart3 className="text-[#4E97FD] text-xl font-semibold"></BsCart3>
              <div class="px-[5px] rounded-full text-black font-bold text-sm absolute bottom-5 -right-1">
                {cart.length}
              </div>
            </button>
          </Link>
          {user ? (
            ""
          ) : (
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
