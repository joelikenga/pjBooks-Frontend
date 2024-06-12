import React, { useState } from "react";
import { FaFilePdf, FaImage } from "react-icons/fa";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";

const UploadBooks: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "Historical",
    "Romance",
    "Thriller",
    "Self-Help",
    "Poetry",
  ];

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setter(fileList[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, category, description, file, cover });
  };

  return (
    <>
      <DashboardWrapper>
        <div className="flex flex-col items-center justify-start py-4">
          <div className="bg-white border rounded-lg p-6 w-full max-w-4xl">
            <h1 className="text-2xl font-semibold text-default_secondary mb-6">
              Upload Book
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4 w-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-default_secondary focus:border-default_secondary sm:text-sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-default_secondary focus:border-default_secondary sm:text-sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a genre
                  </option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="mt-1 block h-40 w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-default_secondary focus:border-default_secondary sm:text-sm"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Book (PDF)
                </label>
                <div className="mt-1 flex flex-col items-center">
                  <label
                    htmlFor="file"
                    className="w-full flex-col flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow-sm tracking-wide border border-blue cursor-pointer hover:bg-gray-200"
                  >
                    <FaFilePdf className="w-6 h-6 mr-2" />
                    <span>Choose a file </span>
                    <input
                      id="file"
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setFile)}
                      accept=".pdf"
                    />
                  </label>
                  {file && <span className="ml-4">{file.name}</span>}
                </div>
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="cover"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Book Cover (Image)
                </label>
                <div className="mt-1 flex flex-col items-center">
                  <label
                    htmlFor="cover"
                    className="w-full flex flex-col items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow-sm tracking-wide border border-blue cursor-pointer hover:bg-gray-200"
                  >
                    <FaImage className="w-6 h-6 mr-2" />
                    <span>Choose a file</span>
                    <input
                      id="cover"
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setCover)}
                      accept="image/*"
                    />
                  </label>
                  {cover && <span className="ml-4">{cover.name}</span>}
                </div>
              </div>
              <div className="mt-6 w-full">
                <button
                  type="submit"
                  className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-default_secondary hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default_secondary"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default UploadBooks;
