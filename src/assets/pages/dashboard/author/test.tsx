import React, { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaUsers,
  FaBell,
  FaSearch,
  FaUserAlt,
  FaBars,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();

  const isRouteActive = (path: string) => location.pathname === path;

  const handleShowNotificationModal = () => {
    setShowNotification(!showNotification);
  };

  const routeTitles: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/folders": "Folders",
    "/shared": "Shared with me",
    "/organisation": "Organisation",
    "/logout": "Logout",
  };

  const currentTitle = routeTitles[location.pathname] || "Dashboard";

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-800 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-white">
          <div className="flex justify-between items-center mb-4">
            <Link to="/" className="block mx-auto w-24 h-8 bg-gray-200">
              <img
                src="https://trustdoc-s3.s3.eu-west-1.amazonaws.com/TrustDoc_Logo.png"
                alt="logo"
              />
            </Link>
            <button
              className="md:hidden text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-5">
            <Link
              to="/dashboard"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 ${
                isRouteActive("/dashboard") ? "bg-blue-700" : ""
              }`}
            >
              <FaHome className="mr-3" /> Dashboard
            </Link>
            <Link
              to="/folders"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 ${
                isRouteActive("/folders") ? "bg-blue-700" : ""
              }`}
            >
              <FaFolderOpen className="mr-3" /> Folders
            </Link>
            <Link
              to="/shared"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 ${
                isRouteActive("/shared") ? "bg-blue-700" : ""
              }`}
            >
              <FaUsers className="mr-3" /> Shared with me
            </Link>
            <Link
              to="/organisation"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 ${
                isRouteActive("/organisation") ? "bg-blue-700" : ""
              }`}
            >
              <FaUsers className="mr-3" /> Organisation
            </Link>
            <Link
              to="/logout"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
            >
              <FaSignOutAlt className="mr-3" /> Log out
            </Link>
          </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="fixed w-full top-0 left-0 z-40 bg-white shadow-md flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-blue-800"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              {currentTitle}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="text-blue-800"
              onClick={handleShowNotificationModal}
            >
              <FaSearch className="w-6 h-6" />
            </button>
            <button className="text-blue-800">
              <FaBell className="w-6 h-6" />
            </button>
            <button
              className="text-blue-800"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <FaUserAlt className="w-6 h-6" />
            </button>
          </div>
        </header>
        <main
          className="flex-1 overflow-y-auto mt-16 p-6"
          onMouseOver={() => {
            setShowNotification(false);
            setShowProfileMenu(false);
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
