import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-[#f8fdfd] shadow-lg px-4 md:px-8">
      {/* Left Side (Logo & Mobile Menu) */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#040d0d]"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <Link
                to="/"
                className="text-[#040d0d] hover:bg-[#9aade3] rounded"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold text-[#040d0d]">
          Task Manager
        </Link>
      </div>

      {/* Center Menu (Desktop View) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <Link to="/" className="text-[#040d0d] hover:text-[#6e78d7]">
              Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side (User Profile & Logout) */}
      <div className="navbar-end space-x-4">
        {user ? (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-10 h-10 rounded-full border-2 border-[#43cbc3] shadow-sm"
              />
              <span className="text-[#040d0d] font-semibold">
                {user?.displayName}
              </span>
            </div>
            <button
              onClick={logOutUser}
              className="btn bg-[#43cbc3] text-white hover:bg-[#36a39a] transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#6e78d7] text-white hover:bg-[#5a62c0] transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
