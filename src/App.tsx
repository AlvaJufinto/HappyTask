import { createBrowserRouter, createHashRouter } from "react-router-dom";

import { useStore } from "./store/todoStore";

import Home from "./pages/Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

