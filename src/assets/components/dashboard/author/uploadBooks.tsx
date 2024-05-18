
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
// import DashboardWrapper from '../../global/DashboardWrapper'

const UploadBooks: React.FC = () => {
     const [title, setTitle] = useState<string>("");
     const [category, setCategory] = useState<string>("");
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
       console.log({ title, category, description, file });
     };
  return (
    <>
      {/* <DashboardWrapper> */}
      <div className='flex gap-2 justify-start items-center text-lime-700 sm:text-2xl font-bold text-2xl mb-6'>
      <FaUpload />
      <h1> UploadBooks</h1>

      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2 md:w-2/5 w-4/5 mx-auto"
      >
        <div className="mb-4 w-full">
          <label
            htmlFor="title"
            className=" text-sm font-medium text-gray-700 "
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            className="mt-1 px-3 py-2 w-full bg-slate-100 border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          <input
            id="category"
            type="text"
            className="mt-1 px-3 py-2 w-full bg-slate-100  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
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
            className="mt-1 block h-40 w-full bg-slate-100 border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            className="mt-1 block px-3 py-2 w-full bg-slate-100  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mt-6 w-full">
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