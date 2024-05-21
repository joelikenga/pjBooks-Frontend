import DashboardWrapper from "../../../../components/global/DashboardWrapper";
import { useState } from "react";

const UploadBooks: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, category, description, file });
  };

  return (
    <>
      <DashboardWrapper>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Upload Book
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="mt-1 px-3 py-2 w-full bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-1 block h-40 w-full bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                <input
                  id="file"
                  type="file"
                  accept=".pdf"
                  className="mt-1 block px-3 py-2 w-full bg-gray-50 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="mt-6 w-full">
                <button
                  type="submit"
                  className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
