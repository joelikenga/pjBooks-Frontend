import React, { useState, ReactNode, useEffect } from "react";

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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const location = useLocation();

  // const isRouteActive = (path: string) => location.pathname === path;


    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      console.log(screenWidth);
      return () => window.removeEventListener("resize", handleResize);
    }, [screenWidth]);


  const handleShowNotificationModal = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`fixed inset-y-0 left-0 -z-0 w-64 bg-[#eee] shadow-lg shadow-black transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-[#0f0d0d]">
          <div className="flex justify-between items-center">
            <a href="/" className="block mx-auto w-24 h-8">
              LOGO
            </a>
            <FaTimes
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-6 h-6 md:hidden block"
            />
          </div>
          <nav className="mt-5">
            <a
              href="/dashboard"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#0f0d0d] hover:text-white
              "
            >
              <FaHome className="mr-3" /> Dashboard
            </a>
            <a
              href="/folders"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#0f0d0d] hover:text-white"
            >
              <FaFolderOpen className="mr-3" /> All Books
            </a>
            <a
              href="/shared"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#0f0d0d] hover:text-white"
            >
              <FaUsers className="mr-3" /> Upload Book
            </a>
            <a
              href="/organisation"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#0f0d0d] hover:text-white"
            >
              <FaUsers className="mr-3" /> Book Request
            </a>
            <a
              href="/logout"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#0f0d0d] hover:text-white"
            >
              <FaSignOutAlt className="mr-3" /> Log out
            </a>
          </nav>
        </div>
      </aside>
      {/*-------------------------------------------- Dashboard Header--------------------------------------------- */}
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
            <h1 className="text-xl font-bold text-gray-800 sm:block hidden sm:pl-40 pl-0"> Dashboard Title </h1>
            
          </div>

          <div className="flex items-center space-x-8">
            <button
              className="text-[#0f0d0d]"
              onClick={handleShowNotificationModal}
            >
              {/* <input type="search" name="search" id="search" className=" py-2.5 px-3 w-68" /> */}
            </button>
            <button className="text-[#0f0d0d]">
              <FaBell className="w-6 h-6" />
            </button>
            <button
              className="text-[#0f0d0d]"
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
