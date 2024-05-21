import React from "react";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
    return (
      <DashboardWrapper>
        <div className="flex flex-col items-center justify-start min-h-screen pt-6 ">
          <div className=" shadow-lg rounded-lg p-6 w-full ">
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
              <img
                className="w-32 h-32 rounded-full border-4 border-gray-500 hover:scale-105"
                src="https://via.placeholder.com/150"
                alt="Author Profile"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-semibold text-gray-800">Mr Lee</h1>
                <p className="text-gray-600 italic">leo.0gbaje@pjbooks.com</p>
                <p className="text-gray-600">+234 90-3678-7860</p>
                <p className="text-gray-600">Location: Abuja, Nigeria</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">
                  About the Author
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
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Genres</h2>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Science Fiction</li>
                  <li>Fantasy</li>
                  <li>Non-fiction</li>
                </ul>
              </div>
              {/* <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">
              Books Written
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Book Title 1</li>
              <li>Book Title 2</li>
              <li>Book Title 3</li>
            </ul>
          </div> */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Awards</h2>
                <p className="text-gray-600 mt-2">Best Author Award, 2024</p>
                <p className="text-gray-600">Literature Prize, 2022</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
                <Link to="/edit-profile">Edit Profile</Link>
              </button>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    );
};

export default ProfilePage;
