import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-[#a7d0c3] py-6 px-4 sm:px-8 text-center">
      <p className="text-gray-700 text-sm sm:text-base">
        Send us a message{" "}
        <span className="text-[#7cc3b1] font-semibold cursor-pointer hover:underline">
          @treine.me
        </span>
      </p>

      {/* Optional: Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-gray-600">
        <a href="#" className="hover:text-[#7cc3b1] transition">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-[#7cc3b1] transition">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-[#7cc3b1] transition">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>

      {/* Optional bottom note */}
      <p className="text-gray-400 text-xs mt-4">
        © {new Date().getFullYear()} Treine.me — All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
