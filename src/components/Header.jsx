import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"; // Import the custom CSS file for background animations

function Header() {
  return (
    <nav className="bg-black opacity-70 shadow-md py-5 fixed w-full z-10">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink
            exact="true"
            to="/"
            className="nav-link text-white font-bold transition-colors duration-300"
            activeClassName="nav-link-active"
          >
            Home/About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="nav-link text-white font-bold transition-colors duration-300"
            activeClassName="nav-link-active"
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="nav-link text-white font-bold transition-colors duration-300"
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
