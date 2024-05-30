import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";

const AllBooks: React.FC = () => {
  interface Book {
    id: number;
    title: string;
    description: string;
    image: string;
    size: string;
  }

  const books: Book[] = [
    {
      id: 1,
      title: "Things Fall Apart",
      description: "This is the description for Book One.",
      image: "https://via.placeholder.com/150",
      size: "1.2MB",
    },
    {
      id: 2,
      title: "Dynamic Programming",
      description: "This is the description for Book Two.",
      image: "https://via.placeholder.com/200",
      size: "21.5MB",
    },
    {
      id: 3,
      title: "Council of Elders",
      description: "This is the description for Book Two. lorem23",
      image: "https://via.placeholder.com/150",
      size: "7.5MB",
    },
    {
      id: 4,
      title: "PJ Book of Dance",
      description: "This is the description for Book Two.",
      image: "https://via.placeholder.com/50",
      size: "1.5MB",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookClick = (book: Book) => {
    navigate(`/books/${book.id}`, { state: { book } });
  };

  return (
    <DashboardWrapper>
      <div className="p-3">
        <div className="mb-4 flex justify-center">
          <input
            type="search"
            className="w-full max-w-md py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {filteredBooks.map((book) => (
              <li
                key={book.id}
                className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                onClick={() => handleBookClick(book)}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600">{book.description}</p>
                    <p className="text-sm font-semibold text-gray-800">
                      Size: {book.size}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default AllBooks;
