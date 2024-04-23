import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import "./App.css";
import User from "./pages/user/user.jsx";
import Movie from "./pages/movie/movie.jsx";
import Login from "./pages/login-signup/login.jsx";
import Signup from "./pages/login-signup/signup.jsx";
import ErrorPage from "./pages/error/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "logout",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
