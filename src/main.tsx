import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/notfound/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
