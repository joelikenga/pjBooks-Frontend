import { useState } from "react";
import { FaAlignJustify, FaAngleDoubleLeft, FaBars, FaBell, FaHamburger } from "react-icons/fa";

interface DashboardWrapperProps{
  children:React.ReactNode
}


const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  
  const [openSidebar,setOpenSidebar]=useState(false)
  return (
    <>
      <div>
        {/* side bar */}
        <div
          className={`${
            openSidebar || window.innerWidth >= 1240 ? "!block" : "!hidden"
          } lg:block hidden w-64 z-50 bg-gray-800 text-white fixed top-0 left-0 m-0 h-screen shadow-lg border-r-2 px-4 mx-auto border-primaryColor`}
        >
          <div className="space-y-3 flex flex-col justify-center group">
            <div className="flex justify-between items-center cursor-pointer">
              <div className="!my-6 text-4xl font-extrabold">PJ</div>
              <div onClick={() => setOpenSidebar(!setOpenSidebar)}>
                {window.innerWidth < 1240 ? <FaAngleDoubleLeft />: ''}
              </div>
            </div>

            <a href="/dashboard" className="py-2">
              Dashboard
            </a>
            <a href="/" className="py-2">
              Upload Books
            </a>
            <a href="/" className="py-2">
              All Books
            </a>
            <a href="/" className="py-2">
              Book Request
            </a>
            <a href="/" className="py-2">
              Settings
            </a>
            <div className="px-2 cursor-pointer py-1.5 font-medium rounded-[15px] text-red-500 !mt-10">
              Log out
            </div>
          </div>
        </div>
        {/* Nav bar */}
        <div
          className={`${
            openSidebar ? "!left-0" : ""
          } h-14 m-0 bg-gray-200 fixed top-0 lg:!left-64 !left-0 font-bold w-screen px-4 flex justify-between items-center`}
        >
          <div className="flex justify-center items-center gap-2">
            <div
              onClick={() => setOpenSidebar(true)}
              className="lg:hidden block w-10 mr-2 cursor-pointer"
            >
              <FaBars />
            </div>
            <div className="sm:hidden block w-10 mr-2">PJ</div>

            <h1 className="sm:block hidden w-10 mr-2">Dashboard</h1>
          </div>

          <div className="flex justify-center items-center gap-3">
            <input type="text" className="lg:block hidden w-24 mr-2 " />
            <div><FaBell /></div>
            <div className="h-10 w-10 rounded-full border border-black"></div>
            
          </div>
        </div>

        <div
          className={` ${openSidebar ? "lg:!ml-64" : "ml-0"} 
          ${window.innerWidth >= 1240 ? 'ml-64' :''
          } mt-16 px-2 `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardWrapper;
