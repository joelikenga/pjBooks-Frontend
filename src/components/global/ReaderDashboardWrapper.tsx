import React, { useState, ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaBars,
  FaTimes,
  FaHistory,
  FaBookmark,
  FaBook,
} from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";

interface ReaderDashboardWrapperProps {
  children: ReactNode;
}

interface Notification {
  id: number;
  message: string;
  read: boolean; // Track if notification is read or not
}

const ReaderDashboardWrapper: React.FC<ReaderDashboardWrapperProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dateTime, setDateTime] = useState(new Date());
  const [dailyQuote, setDailyQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const location = useLocation();

  const isRouteActive = (path: string) => location.pathname === path;

  const greetings = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Day";
    } else if (currentHour >= 18 && currentHour < 22) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  useEffect(() => {
    (async () => {
      const index = Math.floor(Math.random() * 16);
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        setDailyQuote(response.data[index].text);
        setAuthor(response.data[index].author);
      } catch (error) {
        console.error("Error fetching daily quote:", error);
      }
    })();
  }, []);

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

  const closeSidebarOnOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).closest(".sidebar") === null) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const fetchNotifications = () => {
      const fetchedNotifications: Notification[] = [
        {
          id: 1,
          message: "Joel Requested to read Things Fall Apart",
          read: false,
        },
        { id: 11, message: "React in 10days deleted", read: false },
        { id: 2, message: "Dance Book Uploaded", read: false },
        { id: 3, message: "Profile Updated Successfully", read: false },
      ];
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);

  const newNotificationsCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markNotificationAsRead = (id: number) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const user = "Joel ";

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
              to="/reader-dashboard"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/reader-dashboard")
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaHome className="mr-3" /> Dashboard
            </Link>
            <Link
              to="/reader-dashboard/library"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/reader-dashboard/library")
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaBook className="mr-3" /> Library
            </Link>
            <Link
              to="/reader-dashboard/bookmarks"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/reader-dashboard/bookmarks")
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaBookmark className="mr-3" /> Bookmarks
            </Link>
            <Link
              to="/reader-dashboard/reading-history"
              className={`flex items-center py-2.5 px-4 rounded-[50px] transition duration-200 hover:bg-gray-200 ${
                isRouteActive("/reader-dashboard/reading-history")
                  ? "bg-default_secondary hover:!bg-default_secondary text-white"
                  : ""
              }`}
            >
              <FaHistory className="mr-3" /> Reading History
            </Link>
          </nav>
          <div className="absolute md:bottom-4 bottom-4 px-2 py-4 left-0 rounded-lg bg-[#fff] border min-h-32 shadow-md mx-2 text-sm text-default_secondary">
            <div className="mb-3 font-semibold text-default_accent">
              ✨ Quote of the Day!
            </div>
            "{dailyQuote ? dailyQuote : "Winners do not quit. only losers quit"}
            " -{author ? author.replace(", type.fit", "") : "PJ-Books"}
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
            <h1 className="text-xl font-bold text-default_secondary">
              PJ Books{" "}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 lg:block hidden sm:pl-36 pl-0">
              {/* {currentTitle} */}
              {greetings()}, {user}! 👋
            </h1>
          </div>
          <div className="relative flex items-center space-x-8">
            <div className="flex items-center space-x-2 relative">
              <span className="text-base text-gray-900 md:block hidden">
                {" "}
                {dateTime.toLocaleTimeString()}
              </span>
              <div className="relative">
                <FaBell
                  className="w-6 h-6 text-default_secondary cursor-pointer"
                  onClick={toggleNotification}
                />
                {newNotificationsCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {newNotificationsCount}
                  </div>
                )}
              </div>
            </div>
            {showNotification && (
              <div className="absolute right-0 mt-2 w-72 top-8 bg-white shadow-lg rounded-md z-50">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-2 text-sm text-gray-700 border-b cursor-pointer hover:bg-slate-100 ${notification.read ? "text-gray-300" : ""}`}
                      onClick={() => {
                        markNotificationAsRead(notification.id);
                        toggleNotification();
                      }}
                    >
                      {notification.message}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-700">
                    No new notifications yet
                  </div>
                )}
                <Link
                  to="/notifications"
                  className="block mx-auto rounded-lg px-4 py-1.5  text-sm text-white w-fit  my-2 text-center bg-default_secondary"
                >
                  <span>View All</span>
                </Link>
              </div>
            )}
            <div
              onClick={toggleProfileMenu}
              className="w-10 h-10 bg-gray-200 rounded-full border-2 border-gray-300 relative cursor-pointer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/47216075?v=4"
                alt="Profile picture"
                className=" rounded-full"
              />
              <div className="absolute z-50 bottom-0 right-0 border ring-1 ring-slate-50 rounded-lg bg-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down "
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-32 top-8 bg-white shadow-lg rounded-md z-50">
                <Link
                  to="/author-dashboard/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <BsPerson /> Profile
                </Link>
                <Link
                  to="/author-dashboard/edit-profile"
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

export default ReaderDashboardWrapper;