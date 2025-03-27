import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font text-base">
              <NavLink to={"/"}>Home</NavLink>

              <NavLink to={"/About"}>About</NavLink>

              <NavLink to={"/FAQ"}>FAQ</NavLink>
            </div>
          </div>
          <div className="font-extrabold px-4 text-green-500 navbar-center text-2xl lg:text-3xl font">
            <NavLink to={"/"}>Arabian Nights</NavLink>
          </div>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal pr-2 gap-6">
            <li className="font text-xl">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="font text-xl">
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li className="font text-xl">
              <NavLink to={"/FAQ"}>FAQ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
