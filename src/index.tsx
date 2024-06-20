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
import { Library } from "./pages/library";
import ReaderDashboard from "./pages/dashboard/reader";
import ReaderLibrary from "./pages/dashboard/reader/ReaderLibrary";

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
    path: "library",
    element: <Library />,
  },
  {
    path: "resetPassword",
    element: <ResetPassword />,
  },
  // Author Dashboard Routes
  // Dashboard for Authors:
  {
    path: "author-dashboard",
    element: <Dashboard />,
  },
  {
    path: "author-dashboard/upload-book",
    element: <UploadBooks />,
  },
  {
    path: "author-dashboard/all-books",
    element: <AllBooks />,
  },
  {
    path: "author-dashboard/books/:id",
    element: <BookDetail />,
  },
  {
    path: "author-dashboard/book-request",
    element: <BookRequest />,
  },
  {
    path: "author-dashboard/profile",
    element: <ProfilePage />,
  },
  {
    path: "author-dashboard/edit-profile",
    element: <ProfileSettings />,
  },
  // Reader Dashboard Routes
  // Dashboard for Readers:
  {
    path: "reader-dashboard",
    element: <ReaderDashboard />,
  },
  {
    path: "reader-dashboard/library",
    element: <ReaderLibrary />,
  },
  // {
  //   path: "/reader-dashboard/book/:id",
  //   element: <BookInfo />,
  // },
  // {
  //   path: "/reader-dashboard/bookmarks",
  //   element: <BookMark />,
  // },
  // {
  //   path: "reader-dashboard/reading-history",
  //   element: <ReadingHistory />,
  // },
  // {
  //   path: "reader-dashboard/profile",
  //   element: <ReaderProfilePage />,
  // },
  // {
  //   path: "reader-dashboard/edit-profile",
  //   element: <ReaderProfileSettings />,
  // },
]);

export const IndexPage = () => {
  return (
    <div className=" max-w-full w-full">
      <RouterProvider router={router} />
    </div>
  );
};


// Reader Dashboard Routes
// Dashboard for Readers:
// Base path: /reader-dashboard
// Example routes:
// /reader-dashboard/library
// /reader-dashboard/book/:id
// /reader-dashboard/profile
// /reader-dashboard/edit-profile
// /reader-dashboard/bookmarks
// /reader-dashboard/reading-history
