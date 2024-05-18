
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../assets/pages/dashboard/author";
import { ResetPassword } from "../assets/pages/resetPassword/components/";
// import Books from "./pages/Books";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/books" element={<Books />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
