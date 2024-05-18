import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./assets/pages/signup";
import { ResetPassword } from "./assets/pages/resetPassword/components";

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
]);

export const IndexPage = () => {
  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
};
