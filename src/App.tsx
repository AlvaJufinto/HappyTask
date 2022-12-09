import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Home from "./pages/Home";

export const router =
document.location.protocol !== "http:" && document.location.protocol !== "https:" ? createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]) : createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

