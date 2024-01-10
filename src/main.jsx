import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./Components/RootLayout/RootLayout";

import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/user/create-account",
        element: <SignUp />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
