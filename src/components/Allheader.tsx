"use client"
import { useState } from "react";
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold px-24">
            Food<span className="text-yellow-400">tuck</span>
          </h2>
        </div>

        {/* Hamburger Icon (Mobile View) */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* Navbar (Desktop View) */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-lg">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 transition duration-200 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex gap-4 px-20">
          <FaSearch className="cursor-pointer hover:text-yellow-400 transition duration-200" />
          <FaUser className="cursor-pointer hover:text-yellow-400 transition duration-200" />
          <FaShoppingBag className="cursor-pointer hover:text-yellow-400 transition duration-200" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col gap-4 text-lg text-center">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 transition duration-200 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Mobile Icons */}
          <div className="flex justify-center gap-6 mt-4 text-2xl">
            <FaSearch className="cursor-pointer hover:text-yellow-400 transition duration-200" />
            <FaUser className="cursor-pointer hover:text-yellow-400 transition duration-200" />
            <FaShoppingBag className="cursor-pointer hover:text-yellow-400 transition duration-200" />
          </div>
        </div>
      )}
    </div>
  );
}