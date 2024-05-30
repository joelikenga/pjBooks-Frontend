import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";
import { FaEdit, FaTrash } from "react-icons/fa";

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Sample data for demonstration. Replace with real data fetch logic.
  const book = {
    id,
    title: "Things Fall Apart",
    description: `Things Fall Apart is a novel written by Nigerian author Chinua Achebe. 
                  Published in 1958, its story chronicles pre-colonial life in the southeastern 
                  part of Nigeria and the arrival of the Europeans during the late nineteenth century. 
                  It is seen as the archetypal modern African novel in English, one of the first to receive 
                  global critical acclaim. The novel follows the life of Okonkwo, an Igbo leader and local 
                  wrestling champion in the fictional Nigerian village of Umuofia.`,
    image: "https://via.placeholder.com/150",
    size: "1.2MB",
  };

  if (!id) return <p>Loading...</p>; 

  return (
    <DashboardWrapper>
      <div className="p-4 md:p-6">
        <button
          onClick={() => navigate("/all-books")}
          className="text-gray-600 hover:underline mb-4"
        >
          &larr; Back to All Books
        </button>
        <div className="bg-white shadow-md rounded-lg p-6 md:flex md:space-x-6">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src={book.image}
              alt={book.title}
              className="w-40 h-40 md:w-60 md:h-60 rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {book.title}
            </h2>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <p className="text-gray-800 font-semibold mb-4">
              Size: {book.size}
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaEdit className="w-5 h-5" /> Edit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                <FaTrash className="w-5 h-5" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default BookDetail;
