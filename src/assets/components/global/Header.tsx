// components/Header.tsx
import React from "react";
import { FaBell, FaSearch, FaBars } from "react-icons/fa";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed w-full top-0 bg-white shadow-md px-4 py-3 flex items-center justify-between sm:px-6 md:px-10 !z-10">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Search..."
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 cursor-pointer" />
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
