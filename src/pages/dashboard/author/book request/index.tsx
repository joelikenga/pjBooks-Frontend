import React, { useState } from "react";
import DashboardWrapper from "../../../../components/global/DashboardWrapper";

interface BookRequest {
  id: number;
  title: string;
  requestedBy: string;
  dateRequested: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const initialRequests: BookRequest[] = [
  {
    id: 1,
    title: "Things Fall Apart",
    requestedBy: "Tonia Japhet",
    dateRequested: "2024-05-23",
    status: "Pending",
  },
  {
    id: 2,
    title: "Animal Farm",
    requestedBy: "Joe Ikenga",
    dateRequested: "2024-06-02",
    status: "Pending",
  },
  {
    id: 3,
    title: "Learn React in 23Days",
    requestedBy: "Joe Biden",
    dateRequested: "2024-06-19",
    status: "Pending",
  },
  {
    id: 4,
    title: "Get Rich Quick v3",
    requestedBy: "Iscariot",
    dateRequested: "2024-06-19",
    status: "Pending",
  },

];

const BookRequest: React.FC = () => {
  const [requests, setRequests] = useState<BookRequest[]>(initialRequests);

  const handleAccept = (id: number) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Accepted" } : request
      )
    );
  };

  const handleReject = (id: number) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Rejected" } : request
      )
    );
  };

  return (
    <DashboardWrapper>
      <div className="flex flex-col items-center justify-start min-h-screen p-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Book Requests
          </h1>
          <div className="space-y-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col md:flex-row md:justify-between items-start md:items-center"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    <span className="text-lg font-bold">
                      {request.title.charAt(0)}
                    </span>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm sm:text-base">
                    <h2 className="sm:text-xl text-lg font-semibold text-gray-800">
                      {request.title}
                    </h2>
                    <p className="text-gray-600">
                      Requested by: {request.requestedBy}
                    </p>
                    <p className="text-gray-600">
                      Date Requested: {request.dateRequested}
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        request.status === "Pending"
                          ? "text-yellow-500"
                          : request.status === "Accepted"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      Status: {request.status}
                    </p>
                  </div>
                </div>
                {request.status === "Pending" && (
                  <div className="mt-4 md:mt-0 md:ml-auto space-x-2">
                    <button
                      onClick={() => handleAccept(request.id)}
                      className="bg-green-500 text-white px-2.5 py-1.5 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="bg-red-500 text-white  px-2.5 py-1.5 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default BookRequest;
