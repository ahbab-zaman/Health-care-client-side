import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/h-icon.png";
import cartLogo from "../../assets/cartIcon.gif";
import { BsCart3, BsCartPlusFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link>
          <div className="flex items-center">
            <img className="w-10" src={logo} alt="" />
            <h2 className="text-xl font-bold">HealthCare</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <details>
              <summary>Languages</summary>
              <ul className="p-2">
                <NavLink>
                  <li>
                    <a>English</a>
                  </li>
                </NavLink>
                <NavLink>
                  <li>
                    <a>Bangla</a>
                  </li>
                </NavLink>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/">Join Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button class="px-6 py-3 rounded-2xl bg-[#4E97FD] flex items-center gap-1 relative z-10">
          <BsCart3 className="text-white text-xl"></BsCart3>
          <div class="bg-[#fff] px-[5px] rounded-full text-black text-sm absolute bottom-4 right-2">0</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
