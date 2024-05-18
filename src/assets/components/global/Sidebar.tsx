// components/Sidebar.tsx
import React from "react";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-800 h-screen fixed  text-white w-64 space-y-6 py-7 px-2  inset-y-0 top-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-200 ease-in-out lg:relative lg:translate-x-0 z-50`}
    >
      <a href="#" className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">Book Dashboard</span>
      </a>
      <nav>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Upload Book
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Authors
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Readers
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
