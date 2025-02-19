import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50">
      {/* 🔵 Top Blue Bar */}
      <div className="w-full bg-[#004AAD] text-white text-sm py-2 px-4 flex justify-between items-center">
        <span>📍 Barangay Lag-on, Daet, Camarines Norte</span>
        <span className="hidden sm:inline font-bold">
          Don't Miss Out! <span className="font-normal">Get the <span className="font-bold">Free Assessment</span></span>
        </span>
      </div>

      {/* 🏠 Main Navbar */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <img src="/images/theralogo.png" alt="Logo" className="h-12" />
          </div>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>

          {/* Register Button (Hidden on Mobile) */}
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Register Here
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-white shadow-md text-gray-700 font-medium text-center space-y-4 py-4">
            <li><a href="#" className="block py-2 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-600">Services</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-600">Contact Us</a></li>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Register Here
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
