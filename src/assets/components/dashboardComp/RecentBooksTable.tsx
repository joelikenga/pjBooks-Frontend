import React from "react";

interface Book {
  id: number;
  title: string;
  size: string;
  dateUploaded: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Things Fall Apart",
    size: "1393kb",
    dateUploaded: "2024-01-01",
  },
  {
    id: 2,
    title: "Dynamic Programming",
    size: "23kb",
    dateUploaded: "2024-01-02",
  },
  {
    id: 3,
    title: "Council of Elders",
    size: "12mb",
    dateUploaded: "2024-05-02",
  },
  {
    id: 4,
    title: "Swize Bansi is Dead",
    size: "23mb",
    dateUploaded: "2024-03-02",
  },
  // Add more book data as needed
];

const RecentBooksTable: React.FC = () => {
  return (
    <div className="overflow-x-none">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left">ID</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Title</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Size</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Date Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b sm:text-base text-sm">
              <td className="py-2 px-4">{book.id}</td>
              <td className="py-2 px-4">{book.title}</td>
              <td className="py-2 px-4">{book.size}</td>
              <td className="py-2 px-4">{book.dateUploaded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBooksTable;
