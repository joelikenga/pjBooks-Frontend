import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Userauth } from "./pages/login_&_signup";
import { ResetPassword } from "./pages/resetPassword/components";
import Dashboard from "./pages/dashboard/author";
import UploadBooks from "./pages/dashboard/author/uploadView"
import AllBooks from "./pages/dashboard/author/all-booksView";
import ProfilePage from "./pages/dashboard/author/profile";
import ProfileSettings from "./pages/dashboard/author/profile/profileSettings";
import BookRequest from "./pages/dashboard/author/book request";
import NotFound from "./pages/not-found";
import { Homepage } from "./pages/homepage";
import BookDetail from "./pages/dashboard/author/all-booksView/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },

  {
    path: "login",
    element: <Userauth />,
  },
  {
    path: "resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "upload-book",
    element: <UploadBooks />,
  },
  {
    path: "all-books",
    element: <AllBooks />,
  },
  {
    path: "/books/:id",
    element: <BookDetail  />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "edit-profile",
    element: <ProfileSettings />,
  },
  {
    path: "book-request",
    element: <BookRequest />,
  },
]);

export const IndexPage = () => {
  return (
    <div className=" max-w-full w-full">
      <RouterProvider router={router} />
    </div>
  );
};
