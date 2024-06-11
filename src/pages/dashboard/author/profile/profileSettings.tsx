import DashboardWrapper from "../../../../components/global/DashboardWrapper";
import React, { useState } from "react";

const ProfileSettings: React.FC = () => {
  const [name, setName] = useState("Mr Lee");
  const [email, setEmail] = useState("leo.Ogbaje@pjbooks.com");
  const [location, setLocation] = useState("Abuja, Nigeria");
  const [genres, setGenres] = useState("Science Fiction, Fantasy, Non-fiction");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, location, genres, bio });
  };

  return (
    <DashboardWrapper>
      <div className="flex flex-col items-center justify-start min-h-screen py-4">
        <div className=" bg-white border rounded-lg p-6 w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Edit Profile
          </h1>
          <hr className="mb-6" />
          <div className="flex flex-col items-center justify-center w-full h-64 rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100">
            <img
                className="rounded-full h-60 w-60"
                src="https://avatars.githubusercontent.com/u/47216075?v=4"
                alt="Author Profile"
              />
          </div>




          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label className="block text-default_secondary font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-default_secondary font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 bg-stale-200 cursor-not-allowed border rounded-lg"
                disabled
              />
            </div>
            <div>
              <label className="block text-default_secondary font-semibold">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-default_secondary font-semibold">Genres</label>
              <input
                type="text"
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-default_secondary font-semibold">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                rows={4}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default ProfileSettings;
