import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base font-sans"
            >
              <li>
                <Link to="/home">
                  <button className="btn">Home</button>
                </Link>
                <Link to="/about">About</Link>
                <Link to="/appointment">Appointment</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/contact">ContactUs</Link>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-lg">
            Doctors Portal
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-base font-sans">
            <li>
              <Link to="/home">
                <button className="btn">Home</button>
              </Link>
              <Link to="/about">About</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/contact">ContactUs</Link>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
