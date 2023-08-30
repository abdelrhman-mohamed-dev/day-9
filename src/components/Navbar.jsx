import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((prevSate) => !prevSate);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Movie App
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-white hover:underline">
            Popular Movies
          </Link>
          <Link to="/search" className="text-white hover:underline">
            Search Movies
          </Link>
          <Link to="/favorites" className="text-white hover:underline">
            <FaHeart />
          </Link>
          <Link to="/cart" className="text-white hover:underline">
            <FaCartShopping />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={handleMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 p-4 mt-2 space-y-2">
              <Link
                to="/"
                className="block text-white hover:underline"
                onClick={handleMenuOpen}
              >
                Popular Movies
              </Link>
              <Link
                to="/search"
                className="block text-white hover:underline"
                onClick={handleMenuOpen}
              >
                Search Movies
              </Link>
              <Link
                to="/favorites"
                className="block text-white hover:underline"
                onClick={handleMenuOpen}
              >
                Favorites
              </Link>
              <Link
                to="/cart"
                className="block text-white hover:underline"
                onClick={handleMenuOpen}
              >
                Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
