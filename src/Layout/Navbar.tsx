import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <main>
      <section className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/occasions" className="hover:text-blue-600 transition">
            Occasions
          </Link>
          <Link to="/gift" className="hover:text-blue-600 transition">
            Gift
          </Link>
          <Link to="/brand" className="hover:text-blue-600 transition">
            Brand
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About Us
          </Link>
          <Link to="/cart" className="px-4 py-2 text-sm font-medium text-white bg-[#E82933] rounded-[12px] hover:bg-red-700 transition">
            Cart
          </Link>
          <Link to="/signin" className="px-4 py-2 text-sm font-medium text-[#171212] bg-[#F5F0F0] rounded-[12px] hover:shadow-md transition duration-200 ease-in-out">
            Sign In
          </Link>
        </nav>

      </section>
    </main>
  );
};

export default Navbar;