import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"; // Import the custom CSS file for background animations

function Header() {
  return (
    <nav className="bg-white/30 shadow-md py-4 fixed w-screen">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink
            exact="true"
            to="/"
            className="nav-link text-gray-800 transition-colors duration-300"
            activeClassName="nav-link-active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-link text-gray-800 transition-colors duration-300"
            activeClassName="nav-link-active"
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="nav-link text-gray-800 transition-colors duration-300"
            activeClassName="nav-link-active"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="nav-link text-gray-800 transition-colors duration-300"
            activeClassName="nav-link-active"
          >
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
