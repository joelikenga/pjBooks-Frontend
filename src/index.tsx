import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./assets/pages/signup";
import { ResetPassword } from "./assets/pages/resetPassword/components";
import Dashboard from "./assets/pages/dashboard/author";
import UploadBooks from "./assets/pages/dashboard/author/uploadView"
import AllBooks from "./assets/pages/dashboard/author/all-booksView";
import ProfilePage from "./assets/pages/dashboard/author/profile";
import ProfileSettings from "./assets/pages/dashboard/author/profile/profileSettings";
import BookRequest from "./assets/pages/dashboard/author/book request";
import NotFound from "./assets/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    errorElement: <NotFound />,
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
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
};
