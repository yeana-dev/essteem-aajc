import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

import logo from "../../assets/advancing-justice-logo.png";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);

  // Enable navbar collapse onClick on mobile-sized screen
  const menu = document.getElementById("menu");
  const hide = () => menu.classList.toggle("hidden");

  return (
    <nav className="bg-white uppercase" id="top">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-7 justify-between">
          <header>
            <NavLink to="/" className="flex items-center py-4 px-2">
              <img src={logo} alt="" width="250" />
            </NavLink>
          </header>

          <section className="hidden md:flex items-center space-x-4 wide-menu text-sm">
            <NavLink
              to="/"
              className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
            >
              Home
            </NavLink>

            <div className="relative group">
              <NavLink
                to="about-us"
                className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
              >
                About Us
              </NavLink>
              <div className="absolute z-10 hidden bg-white group-hover:block">
                <div className="px-2 pt-2 pb-4 bg-white shadow-lg rounded-lg w-52 ">
                  <div className="grid grid-cols-1 ">
                    <NavLink
                      to="/about-us/atlanta"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
                    >
                      Atlanta
                    </NavLink>
                    <NavLink
                      to="/about-us/chicago"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
                    >
                      Chicago
                    </NavLink>
                    <NavLink
                      to="/about-us/los-angeles"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
                    >
                      Los Angeles
                    </NavLink>
                    <NavLink
                      to="/about-us/san-francisco"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
                    >
                      San Francisco
                    </NavLink>
                    <NavLink
                      to="/about-us/washington-dc"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
                    >
                      Washington D.C.
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/news"
              className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300 "
            >
              News
            </NavLink>
            <NavLink
              to="/events"
              className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
            >
              Events
            </NavLink>
            <NavLink
              to="/donate"
              className="py-4 px-2 text-aajc-darkgrey font-semibold transition duration-300"
            >
              Donations
            </NavLink>
          </section>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <svg
                className="w-6 h-6 text-aajc-darkgrey hover:text-black"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile screen navbar */}
      <section
        className={`${
          !toggle && "hidden"
        } md:hidden px-3 border-t-8 border-aajc-orange`}
        id="menu"
        onClick={() => hide()}
      >
        <ul className="mobile-menu">
          <li>
            <NavLink
              to="/"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us/atlanta"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Atlanta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us/chicago"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Chicago
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us/los-angeles"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Los Angeles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us/san-francisco"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              San Francisco
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us/washington-dc"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Washington D.C.
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/news"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donate"
              className="block text-sm px-2 py-3 transition duration-300"
            >
              Donations
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}
