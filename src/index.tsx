import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./assets/pages/signup";
import { ResetPassword } from "./assets/pages/resetPassword/components";
import Dashboard from "./assets/pages/dashboard/author";
import UploadBooks from "./assets/pages/dashboard/author/uploadView/uploadBooks"
import AllBooks from "./assets/pages/dashboard/author/all-booksView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    errorElement: <>error occured</>,
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
]);

export const IndexPage = () => {
  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
};
