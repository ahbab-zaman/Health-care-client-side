import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/h-icon.png";
import { BsCart3, BsCartPlusFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="navbar w-11/12 mx-auto">
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
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#4E97FD] text-white semibold"
                      : "text-gray-500 bg-transparent"
                  }
                  to="/"
                >
                  Shop
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
                  to="/"
                >
                  Join Us
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-10" src={logo} alt="" />
              <h2 className="text-xl font-bold">HealthCare</h2>
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
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#4E97FD] text-white semibold"
                    : "text-gray-500 bg-transparent"
                }
                to="/"
              >
                Shop
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
                    ? "bg-[#4E97FD] text-white font-semibold"
                    : "text-gray-500 bg-transparent"
                }
                to="/"
              >
                Join Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button class="px-6 py-3 rounded-2xl flex items-center gap-1 relative z-10">
            <BsCart3 className="text-[#4E97FD] text-xl font-semibold"></BsCart3>
            <div class="px-[5px] rounded-full text-black font-bold text-sm absolute bottom-4 right-2">
              0
            </div>
          </button>
          <Link to="/login">
            <button className="px-4 py-2 bg-[#4E97FD] text-white font-semibold rounded-lg">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
