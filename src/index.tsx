import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./pages/signup";
import { ResetPassword } from "./pages/resetPassword/components";
import Dashboard from "./pages/dashboard/author";
import UploadBooks from "./pages/dashboard/author/uploadView"
import AllBooks from "./pages/dashboard/author/all-booksView";
import ProfilePage from "./pages/dashboard/author/profile";
import ProfileSettings from "./pages/dashboard/author/profile/profileSettings";
import BookRequest from "./pages/dashboard/author/book request";
import NotFound from "./pages/not-found";

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
