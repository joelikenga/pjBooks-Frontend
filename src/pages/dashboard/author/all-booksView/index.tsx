import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";
import { FaSearch } from "react-icons/fa";

const AllBooks: React.FC = () => {
  interface Book {
    id: number;
    title: string;
    genre: string;
    image: string;
    size: string;
  }

  const books: Book[] = [
    {
      id: 1,
      title: "Things Fall Apart",
      genre: "Non-Fiction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "1.2MB",
    },
    {
      id: 2,
      title: "Dynamic Programming",
      genre: "Programming.",
      image: "https://media.istockphoto.com/id/1329614638/vector/brochure-design-cover-modern-layout-annual-report-poster-flyer-in-a4.jpg?s=612x612&w=0&k=20&c=AqyW5nykTdPUptmlBO4ge-zMiPTDJuHAIiHqNktzfto=",
      size: "21.5MB",
    },
    {
      id: 3,
      title: "Council of Elders",
      genre: "Novel",
      image: "https://templates.mediamodifier.com/5db698f47c3dc9731647a4e9/fiction-novel-book-cover-template.jpg",
      size: "7.5MB",
    },
    {
      id: 4,
      title: "PJ Book of Dance",
      genre: "Fiction.",
      image: "https://templates.mediamodifier.com/5db698f47c3dc9731647a4e9/fiction-novel-book-cover-template.jpg",
      size: "1.5MB",
    },
    {
      id: 5,
      title: "Advanced Algorithms",
      genre: "Fiction.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "3.4MB",
    },
    {
      id: 6,
      title: "Modern JavaScript",
      genre: "Non-Fiction.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "5.8MB",
    },
    {
      id: 7,
      title: "React in Action",
      genre: "Programming",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "2.7MB",
    },
    {
      id: 8,
      title: "Node.js Design Patterns",
      genre: "Programming",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "4.3MB",
    },
    {
      id: 9,
      title: "Introduction to Python",
      genre: "Fiction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "6.1MB",
    },
    {
      id: 10,
      title: "Machine Learning Basics",
      genre: "Fiction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s",
      size: "8.2MB",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookClick = (book: Book) => {
    navigate(`/author-dashboard/books/${book.id}`, { state: { book } });
  };

  return (
    <DashboardWrapper>
      <div className="py-3">
        <div className="mb-4 flex justify-start">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              className="w-full py-2 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
        </div>
        {filteredBooks ? <div className="text-default_secondary font-semibold my-3">Books ({filteredBooks.length})</div> : ''}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filteredBooks.length < 1 ? (
            <div className="text-center col-span-full p-6 font-semibold italic">
              No book found
            </div>
          ) : (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer hover:scale-105"
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-fill"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {book.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-800">
                    Size: {book.size}
                  </p>
                  <p className="text-sm font-normal text-gray-800">
                    Size: {book.genre}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default AllBooks;
