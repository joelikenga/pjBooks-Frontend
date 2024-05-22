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
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
        <div className=" bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Edit Profile
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Genres</label>
              <input
                type="text"
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Bio</label>
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
