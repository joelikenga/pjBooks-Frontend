
import ReaderDashboardWrapper from "../../../components/global/ReaderDashboardWrapper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReaderDashboard = () => {
  // Sample data for reading progress (bar chart)
  const readingProgressData = [
    { month: "Jan", booksRead: 10 },
    { month: "Feb", booksRead: 3 },
    { month: "Mar", booksRead: 4 },
    { month: "April", booksRead: 1 },
    { month: "May", booksRead: 9 },
    { month: "Jun", booksRead: 2 },
  ];

  // Sample data for recommended books
  const recommendedBooks = [
    { id: 1, title: "Learn React in 50days", author: "CodeNinja" ,genre:'Fiction', likes:'1294' },

  ];


  const totalBooksBorrowed = 30;

  // Sample data for account activity
  const accountActivity = [
    { date: "2024-06-15", event: 'Borrowed "Things Fall Apart"' },
    { date: "2024-06-12", event: 'Returned "Dance Book"' },
    { date: "2024-06-12", event: 'Returned "Chike and the River"' },
    { date: "2024-06-12", event: 'Returned "Dynamic Programming"' },
   
  ];

  return (
    <ReaderDashboardWrapper>
      <div className="px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Reading Progress */}
          <div className="bg-white flex flex-col justify-start items-center rounded-lg border border-green-700 shadow-md p-3">
            <h2 className="sm:text-lg text-sm bg-green-100 px-6 py-2 rounded-[40px] w-fit font-semibold text-green-800 mb-4">
              Reading Progress
            </h2>
            <ResponsiveContainer
              width="100%"
              height={200}
              className="overflow-x-auto"
            >
              <BarChart data={readingProgressData}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="booksRead" fill="#008000" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recommended Books */}
          <div className=" rounded-lg flex flex-col justify-start items-center shadow-md border border-yellow-700 p-6">
            <h2 className="sm:text-lg text-sm bg-yellow-100 px-6 py-2 rounded-[40px] w-fit  font-semibold text-yellow-800 mb-4">
              Recommended Books
            </h2>
            <div className="space-y-4">
              {recommendedBooks.map((book) => (
                <div key={book.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1K_Y8KVyiu2GbBwKQix-8Bi7yhDsxOQBUw&s"
                      alt="Book Cover"
                      className="w-24 h-32 object-fill rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-800">{book.title}</p>
                    <p className="text-sm text-gray-600">Author: {book.author}</p>
                    <p className="text-sm text-gray-600">Genre: {book.genre}</p>
                    <p className="text-sm text-gray-600">Likes: {book.likes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Books Borrowed Card */}
          <div className="bg-white flex flex-col justify-start items-center rounded-lg border border-blue-700 shadow-md p-6">
            <h2 className="sm:text-lg text-sm bg-blue-100 px-6 py-2 rounded-[40px] w-fit  font-semibold text-blue-800 mb-4">
              Total Books Borrowed
            </h2>
            <p className="text-7xl text-center text-blue-600 font-bold">
              {totalBooksBorrowed}
            </p>
          </div>
        </div>
        {/* Account Activity */}
        <div className="col-span-3 bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="sm:text-xl text-lg font-semibold text-default_secondary mb-4">
            Account Activity
          </h2>
          <ul className="divide-y divide-gray-300">
            {accountActivity.map((activity, index) => (
              <li key={index} className="py-2 relative">
                <div className="flex items-center">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 w-1 h-full"></div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">{activity.date}</p>
                    <p className="text-sm">{activity.event}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ReaderDashboardWrapper>
  );
};

export default ReaderDashboard;
