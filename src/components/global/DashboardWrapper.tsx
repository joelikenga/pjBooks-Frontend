import React, { useState, ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaBell,
  FaBars,
  FaTimes,
  FaArchive,
} from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { ImFolderUpload } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dateTime, setDateTime] = useState(new Date());
  const location = useLocation();

  const isRouteActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
    setShowProfileMenu(false);
    setSidebarOpen(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
    setShowNotification(false);
    setSidebarOpen(false);
  };

  // const routeTitles: { [key: string]: string } = {
  //   "/dashboard": "Dashboard",
  //   "/all-books": "All Books",
  //   "/upload-book": "Upload Book",
  //   "/book-request": "Book Request",
  //   "/edit-profile": "Edit Profile",
  //   "/profile": "Profile",
  // };

  const closeSidebarOnOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).closest(".sidebar") === null) {
      setSidebarOpen(false);
    }
  };

  const quoteOfTheDay = "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt";

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
        <div className="p-6 text-default_secondary">
          <div className="flex justify-between items-center ml-4">
            <Link to="/" className="block font-bold">
              PJ Books
            </Link>
            <FaTimes
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-3 h-3 md:hidden block cursor-pointer"
            />
          </div>
          <nav className="mt-8 space-y-4">
            <Link
              to="/dashboard"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                (isRouteActive("/dashboard") &&
                !isRouteActive("/all-books") &&
                !isRouteActive("/upload-book") && 
                !isRouteActive("/book-request")) ||
                (!isRouteActive("/dashboard") &&!isRouteActive("/all-books") &&
                !isRouteActive("/upload-book") &&
                !isRouteActive("/book-request"))
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaHome className="mr-3" /> Dashboard
            </Link>
            <Link
              to="/all-books"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200  ${
                isRouteActive("/all-books")   
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaFolderOpen className="mr-3" /> All Books
            </Link>
            <Link
              to="/upload-book"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/upload-book")
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <ImFolderUpload className="mr-3" /> Upload Book
            </Link>
            <Link
              to="/book-request"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/book-request")
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaArchive className="mr-3" /> Book Request
            </Link>
          </nav>
          <div className="absolute md:bottom-4 bottom-4 px-2 py-4 left-0 rounded-lg bg-[#fff] border shadow-md shadow-default_secondary mx-2 text-sm text-default_secondary">
            <div className="mb-3 font-semibold text-default_accent">✨ Quote of the Day!</div>
            {quoteOfTheDay}
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="fixed w-full top-0 left-0 z-40 bg-[#eee] shadow-md flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-default_secondary"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
            <h1 className="text-xl font-bold text-default_secondary">PJ Books </h1>
            <h1 className="text-xl font-bold text-gray-800 lg:block hidden sm:pl-36 pl-0">
              {/* {currentTitle} */}
            </h1>
          </div>
          <div className="relative flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-base text-gray-900 md:block hidden"> {dateTime.toLocaleTimeString()}</span>
              <FaBell className="w-6 h-6 text-default_secondary" onClick={toggleNotification} />
            </div>
            {showNotification && (
              <div className="absolute right-0 mt-2 w-64 top-8 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/notifications"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  View All Notifications
                </Link>
                <div className="px-4 py-2 text-sm text-gray-700">
                  No new notifications
                </div>
              </div>
            )}
              <div
              onClick={toggleProfileMenu}
               className="w-10 h-10 bg-gray-200 rounded-full border-2 border-gray-300 relative cursor-pointer">
                <img
                  src="https://avatars.githubusercontent.com/u/47216075?v=4"
                  alt="Profile picture"
                  className=" rounded-full"
                />
                <div className="absolute z-50 bottom-0 right-0 border ring-1 ring-slate-50 rounded-lg bg-slate-200"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down "><path d="m6 9 6 6 6-6"></path></svg></div>
              </div>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-32 top-8 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                 <BsPerson /> Profile
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                 <CiSettings /> Settings
                </Link> 
                <Link
                  to="/logout"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                 <BiLogOut /> Logout
                </Link>
              </div>
            )}
          </div>
        </header>
        <main
          className="flex-1 overflow-y-auto mt-16 p-3 bg-white"
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
