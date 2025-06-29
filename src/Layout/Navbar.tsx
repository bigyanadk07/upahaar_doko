import React from "react";
import logo from "../assets/logo.svg";
const Navbar: React.FC = () => {
  return (
    <main>
      <section className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800"><img src={logo}/></div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Occasions
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Gift
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Brand
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About Us
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">
            Cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
