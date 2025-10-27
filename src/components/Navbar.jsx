import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-32 py-6 bg-white border-b border-[#a7d0c3]">
      
      {/* Left side - Logo */}
      <h1 className="text-xl font-semibold text-[#7cc3b1] cursor-pointer">
        treine.me
      </h1>

      {/* Right side - Menu */}
      <ul className="flex gap-10 text-[16px]">
        <li className="font-semibold text-[#1d1b27] cursor-pointer">Home</li>
        <li className="text-gray-400 hover:text-[#1d1b27] cursor-pointer transition">About</li>
        <li className="text-gray-400 hover:text-[#1d1b27] cursor-pointer transition">Training</li>
      </ul>

    </nav>
  );
}

export default Navbar;
