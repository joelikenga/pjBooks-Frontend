import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = {
    id,
    title: "Things Fall Apart",
    description: `Things Fall Apart is a novel written by Nigerian author Chinua Achebe. 
                  Published in 1958, its story chronicles pre-colonial life in the southeastern 
                  part of Nigeria and the arrival of the Europeans during the late nineteenth century. 
                  It is seen as the archetypal modern African novel in English, one of the first to receive 
                  global critical acclaim. The novel follows the life of Okonkwo, an Igbo leader and local 
                  wrestling champion in the fictional Nigerian village of Umuofia.`,
    image: "https://templates.mediamodifier.com/5db698f47c3dc9731647a4e9/fiction-novel-book-cover-template.jpg",
    size: "1.2MB",
    genre: "Fiction",
    dateUploaded: "2024-06-01",
    likes: 230,
    downloads: 540,
    readers: 120,
    status: "Public",
  };

  if (!id) return <p>Loading...</p>;

  return (
    <DashboardWrapper>
      <div className="p-2 md:p-2">
        <button
          onClick={() => navigate("/all-books")}
          className="text-gray-600 hover:underline mb-4"
        >
          &larr; Back to All Books
        </button>
        <div className="bg-white border rounded-lg p-2 md:flex md:space-x-6">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full rounded-lg object-cover border"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {book.title}
            </h2>
            <hr />
            <p className="text-gray-600 my-4 p-3 border rounded-md">{book.description}</p>
            
            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
              <span className="font-semibold">Genre: </span> {book.genre}
            </p>
            </div>

            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
             <span className="font-semibold">Date Uploaded: </span> {book.dateUploaded}
            </p>
            </div>
            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
              <span className="font-semibold">Size: </span> {book.size}
            </p>
            </div>
            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
            <span className="font-semibold">Likes: </span>   {book.likes}
            </p>
            </div>
            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
            <span className="font-semibold">Downloads: </span> {book.downloads}
            </p>
            </div>
            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
            <span className="font-semibold">Readers: </span> {book.readers}
            </p>
            </div>
            <div className="p-3 rounded-md border my-2">
            <p className="text-gray-800 mb-2">
              <span className="font-semibold">Status: </span> {book.status}
              </p>
              </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-slate-700 text-white rounded-[50px] shadow hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-black">
                 Edit
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-[50px] shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-black">
                 Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default BookDetail;
