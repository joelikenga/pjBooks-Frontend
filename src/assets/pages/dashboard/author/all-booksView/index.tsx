// src/pages/Books.tsx
import React from "react";
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
      title: "Things fall Apart",
      description: "This is the description for Book One.",
      image: "https://via.placeholder.com/150",
      size: "1.2MB",
    },
    {
      id: 2,
      title: "Dynamic Programming ",
      description: "This is the description for Book Two.",
      image: "https://via.placeholder.com/200",
      size: "21.5MB",
    },
    {
      id: 3,
      title: "Council of Elders",
      description: "This is the description for Book Two.",
      image: "https://via.placeholder.com/150",
      size: "7.5MB",
    },
    {
      id: 4,
      title: "Pj Book of Dance",
      description: "This is the description for Book Two.",
      image: "https://via.placeholder.com/50",
      size: "1.5MB",
    },
    
  ];

  return (
    <DashboardWrapper>
      <div className="p-3">
        <h1 className="text-2xl font-semibold mb-4">All Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{book.description}</p>
                <p className="text-sm font-semibold">Size: {book.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default AllBooks;
