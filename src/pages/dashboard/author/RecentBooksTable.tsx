import React from "react";
import { FaHeart, FaRegClock } from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  size: string;
  dateUploaded: string;
  likes: number;
  requests: number;
}

const books: Book[] = [
  {
    id: 1,
    title: "Things Fall Apart",
    size: "1393kb",
    dateUploaded: "2024-01-01",
    likes: 25,
    requests: 10,
  },
  {
    id: 2,
    title: "Dynamic Programming",
    size: "23kb",
    dateUploaded: "2024-01-02",
    likes: 30,
    requests: 15,
  },
  {
    id: 3,
    title: "Council of Elders",
    size: "12mb",
    dateUploaded: "2024-05-02",
    likes: 20,
    requests: 5,
  },
  {
    id: 4,
    title: "Swize Bansi is Dead",
    size: "23mb",
    dateUploaded: "2024-03-02",
    likes: 35,
    requests: 12,
  },
];

const RecentBooksList: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <ul className="divide-y divide-gray-200">
        {books.map((book) => (
          <li key={book.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold">
                  {book.title.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {book.title}
                </p>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-500">Size: {book.size}</p>
                  <p className="text-sm sm:block hidden text-gray-500">
                    Uploaded: {book.dateUploaded}
                  </p>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-500">
                    <FaHeart className="inline-block mr-1 text-red-600" />{" "}
                    {book.likes}
                  </p>
                  <p className="text-sm sm:block hidden text-gray-500">
                    <FaRegClock className="inline-block mr-1 text-orange-600 animate-spin" />{" "}
                    {book.requests} Requests
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBooksList;
