import React, { useState, ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaUsers,
  FaBell,
  FaBars,
  // FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const isRouteActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
    setShowProfileMenu(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
    setShowNotification(false);
  };

  const routeTitles: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/all-books": "All Books",
    "/upload-book": "Upload Book",
    "/book-request": "Book Request",
  };

  
  const currentTitle = routeTitles[location.pathname] || "Dashboard";


  const closeSidebarOnOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).closest(".sidebar") === null) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
          onClick={closeSidebarOnOutsideClick}
        ></div>
      )}
      <aside
        className={`sidebar fixed inset-y-0 left-0 z-50 w-64 bg-[#eee] border-r-2 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-[#0f0d0d]">
          <div className="flex justify-between items-center">
            <Link to="/" className="block mx-auto w-24 h-8">
              LOGO
            </Link>
            <FaTimes
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-6 h-6 md:hidden block"
            />
          </div>
          <nav className="mt-5">
            <Link
              to="/dashboard"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/dashboard") ? "bg-[#0f0d0d] text-white" : ""
              }`}
            >
              <FaHome className="mr-3" /> Dashboard
            </Link>
            <Link
              to="/all-books"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200  ${
                isRouteActive("/all-books") ? "bg-[#0f0d0d] text-white" : ""
              }`}
            >
              <FaFolderOpen className="mr-3" /> All Books
            </Link>
            <Link
              to="/upload-book"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/upload-book") ? "bg-[#0f0d0d] text-white" : ""
              }`}
            >
              <FaUsers className="mr-3" /> Upload Book
            </Link>
            <Link
              to="/book-request"
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/book-request") ? "bg-[#0f0d0d] text-white" : ""
              }`}
            >
              <FaUsers className="mr-3" /> Book Request
            </Link>
           
          </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="fixed w-full top-0 left-0 z-40 bg-[#eee] shadow-md flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-[#0f0d0d]"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
            <h1 className="text-xl font-semibold text-gray-800">LOGO </h1>
            <h1 className="text-xl font-bold text-gray-800 sm:block hidden sm:pl-44 pl-0">
              {currentTitle}
            </h1>
          </div>
          <div className="relative flex items-center space-x-8">
            <button className="text-[#0f0d0d]" onClick={toggleNotification}>
              <FaBell className="w-6 h-6" />
            </button>
            {showNotification && (
              <div className="absolute right-0 mt-2 w-64 top-8 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/notifications"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  View All Notifications
                </Link>
                <div className="px-4 py-2 text-sm text-gray-700">
                  No new notifications
                </div>
              </div>
            )}
            <button
              className="text-[#0f0d0d] flex items-center gap-2"
              onClick={toggleProfileMenu}
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-gray-300">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/woman-user-color-icon.svg"
                  alt="Profile picture"
                  className=" rounded-full"
                />
              </div>
              <div className="sm:block hidden font-semibold">Welcome User</div>
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-32 top-8 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </header>
        <main
          className="flex-1 overflow-y-auto mt-16 p-4 bg-white"
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
