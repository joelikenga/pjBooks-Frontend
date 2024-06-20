import React, { useState } from "react";
import ReaderDashboardWrapper from "../../../../components/global/ReaderDashboardWrapper";

// Mock data for books 
const books = [
  {
    id: 1,
    title: "Book 1",
    genre: "Fiction",
    author: "Author A",
    summary: "Summary of Book 1",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Book 2",
    genre: "Non-Fiction",
    author: "Author B",
    summary: "Summary of Book 2",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Book 3",
    genre: "Fiction",
    author: "Author C",
    summary: "Summary of Book 3",
    coverUrl: "https://via.placeholder.com/150",
  },
  
];

const ReaderLibrary: React.FC = () => {
  const [genreFilter, setGenreFilter] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Extract unique genres from books
  const genres = Array.from(new Set(books.map((book) => book.genre)));

  // Filtered books based on selected genre and search term
  const filteredBooks = books.filter(
    (book) =>
      (genreFilter === "" || book.genre === genreFilter) &&
      (searchTerm === "" ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Handle genre selection change
  const handleGenreSelect = (genre: string) => {
    setGenreFilter(genre);
    setSelectedBook(null); // Reset selected book when changing genre filter
  };

  // Handle click on a book to show details
  const handleBookClick = (bookId: number) => {
    setSelectedBook(bookId);
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Render book details
  const renderBookDetails = () => {
    if (selectedBook === null) {
      return null;
    }

    const book = books.find((book) => book.id === selectedBook);
    if (!book) {
      return null;
    }

    return (
      <div className="border p-4 mt-4">
        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>{book.summary}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => setSelectedBook(null)}
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <ReaderDashboardWrapper>
      <div className="max-w-7xl mx-auto p-4">
        {/* <h1 className="text-3xl font-bold mb-8">Library</h1> */}

        {/* Search Field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Filter Panel */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Filter by Genre</h2>
          <select
            value={genreFilter}
            onChange={(e) => handleGenreSelect(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Book List as Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredBooks.length === 0 ? (
            <div className="text-center text-gray-600">No books found.</div>
          ) : (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="border rounded-md overflow-hidden hover:shadow-lg"
              >
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => handleBookClick(book.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {renderBookDetails()}
      </div>
    </ReaderDashboardWrapper>
  );
};

export default ReaderLibrary;
