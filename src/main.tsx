import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/notfound/notfound";
import Services from "./pages/services/services";
import About from "./pages/about/about";
import WorkPage from "./pages/work/workPage";
import Contact from "./pages/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/work/:id",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
