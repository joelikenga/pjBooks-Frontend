import React from "react";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";
import { Link } from "react-router-dom";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";


const ProfilePage: React.FC = () => {
    return (
      <DashboardWrapper>
        <div className="flex flex-col items-center justify-start pt-6 ">
          <div className=" rounded-lg border border-gray-300  p-6  px-6 w-full ">
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
              <img
                className="w-32 h-32 rounded-full border-4 border-gray-500 hover:scale-105"
                src="https://avatars.githubusercontent.com/u/47216075?v=4"
                alt="Author Profile"
              />
              <div className="text-center sm:text-left">
                <h1 className="sm:text-4xl text-3xl font-semibold text-default_secondary mb-2">Ogbaje Leo Arome</h1>
                <p className="text-gray-700">Leo.ogbaje@pjbooks.com</p> 
              </div>
            </div>


            {/* <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"> */}
                <div className="bg-gray-50 p-4 rounded-lg border mt-12 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                {/* <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2> */}
                <p className="text-gray-600 flex items-center gap-2"><CiLocationOn /> Nigeria</p>
                <p className="text-gray-600 flex items-center gap-2"><CiCalendarDate /> Joined since Jun 1st, 2024</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border mt-6">
                <h2 className="text-xl font-semibold text-default_secondary">
                  About me
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium praesentium animi error maxime, nobis repudiandae,
                  tenetur placeat quibusdam eaque facilis sapiente commodi quia.
                  Assumenda dolores iusto temporibus corporis eum non. Illo
                  tenetur vitae voluptatibus consequuntur debitis inventore, ut,
                  quia nesciunt dolorem doloribus deleniti soluta repellat
                  nulla. Minima optio eum incidunt molestiae quos quo{" "}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border mt-6">
                <h2 className="text-xl font-semibold text-default_secondary">Genres</h2>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Science Fiction</li>
                  <li>Fantasy</li>
                  <li>Non-fiction</li>
                </ul>
              </div>
            
              <div className="bg-gray-50 p-4 rounded-lg border mt-6">
                <h2 className="text-xl font-semibold text-gray-800">Awards</h2>
                <p className="text-gray-600 mt-2">Best Author Award, 2024</p>
                <p className="text-gray-600">Literature Prize, 2022</p>
              </div>
            {/* </div> */}
            <div className="mt-6 flex justify-end">
              <button className="rounded-full flex items-center gap-2 font-medium focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed text-slate-600 bg-white/20 hover:bg-slate-100/80 dark:text-slate-200 dark:bg-black/20 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:bg-slate-100/80 focus:ring-blue-600 dark:focus:ring-blue-500 dark:focus:ring-offset-slate-950 dark:focus:bg-slate-900 disabled:text-slate-300 disabled:bg-white/20 dark:disabled:text-slate-800 dark:disabled:bg-black/20 text-sm py-1 px-[14px] !gap-1 undefined undefined">
                <Link to="/edit-profile">Edit Profile</Link>
              </button>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    );
};

export default ProfilePage;
