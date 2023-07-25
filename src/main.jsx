import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Expense from "./Components/Expense.jsx";
import Income from "./Components/Income.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/income",
    element: <Income />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
