import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-32 py-6 bg-white border-b border-[#a7d0c3]">
      
      {/* Left side - Logo */}
      <h1 className="text-xl sm:text-2xl font-semibold text-[#7cc3b1] cursor-pointer">
        treine.me
      </h1>

      {/* Hamburger Icon (Visible only on mobile) */}
      <div
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`h-1 w-6 bg-[#1d1b27] rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 bg-[#1d1b27] rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 bg-[#1d1b27] rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {/* Menu Items */}
      <ul
        className={`md:flex gap-10 text-[16px] font-medium absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto top-[70px] md:top-auto shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"
        } flex flex-col md:flex-row items-center md:items-center py-4 md:py-0`}
      >
        <li className="font-semibold text-[#1d1b27] cursor-pointer hover:text-[#7cc3b1] transition">
          Home
        </li>
        <li className="text-gray-500 hover:text-[#1d1b27] cursor-pointer transition">
          About
        </li>
        <li className="text-gray-500 hover:text-[#1d1b27] cursor-pointer transition">
          Training
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
