
import { useState } from 'react';
import DashboardWrapper from '../../global/DashboardWrapper'

const UploadBooks: React.FC = () => {
     const [title, setTitle] = useState<string>("");
     const [author, setAuthor] = useState<string>("");
     const [description, setDescription] = useState<string>("");
     const [file, setFile] = useState<File | null>(null);

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const fileList = e.target.files;
       if (fileList && fileList.length > 0) {
         setFile(fileList[0]);
       }
     };

     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       // Handle form submission here, e.g., upload book details and file to server
       console.log({ title, author, description, file });
     };
  return (
    <>
      {/* <DashboardWrapper> */}
        <h1> UploadBooks</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
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
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </div>
        </form>
      {/* </DashboardWrapper> */}
    </>
  );
};

export default UploadBooks